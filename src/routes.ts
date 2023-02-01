import { createCheerioRouter, Request } from 'crawlee';
import { Actor } from 'apify';
import {
    Labels,
    COMPANY,
    PRODUCT_ENDPOINT_URL,
    CATEGORY_ENDPOINT_PRODUCT_COUNT,
    STATE_KEY,
 SCRAPED_PRODUCTS_KEY,
} from './constants.js';
import { getProductDescription } from './extractors.js';
import {
    getCategoryEndpointUrl,
    getCategoryName,
    getDivisionName,
    getProductEndpointBody,
    getProductPageUrl, getSubCategoryName,
} from './tools.js';
import {
    CategoryResponse,
    ProductResponse,
    ProductDto,
} from './types.js';
import actorStatistics from './actor_statistics.js';

export const router = createCheerioRouter();

const stateStore = await Actor.openKeyValueStore(STATE_KEY);


const defaultStore = await Actor.openKeyValueStore();
const scrapedProducts = await defaultStore.getAutoSavedValue<Record<string, boolean>>(
    SCRAPED_PRODUCTS_KEY,
    {},
);

/**
 * Enqueues product endpoint requests.
 * Color combinations of each product are sent via userData
 * First request enqueues other requests to this endpoint.
 */
router.addHandler(Labels.CATEGORY_ENDPOINT, async ({ request, log, crawler, json }) => {
    const { label, country, offset } = request.userData;
    const response = json as CategoryResponse;
    log.info(`${label}: Parsing category endpoint - ${request.loadedUrl}`);

    // Enqueue product page requests
    const { products } = response.data.products;
    if (products === null) return;

    const productRequests = products.map((product) => {
        const { title: productName, url: urlPattern } = product;

        const colorCombinations: ProductDto[] = product.colorways.map((colorway) => {
            return {
                productId: colorway.cloudProductId,
                url: colorway.pdpUrl,
                imageUrl: colorway.images.squarishURL,
            };
        });
        const url = getProductPageUrl(urlPattern, country.code);

        return new Request({
            url,
            uniqueKey: `productPage_${product.id}_${country.code}`,
            userData: {
                label: Labels.PRODUCT_PAGE,
                colorCombinations,
                productName,
                country,
            },
        });
    });

    // Enqueue other requests if this is first category endpoint request
    const categoryRequests: Request[] = [];
    if (offset === 0) {
        const totalProducts = response.data.products.pages.totalResources;
        for (let tmpOffset = CATEGORY_ENDPOINT_PRODUCT_COUNT; tmpOffset < totalProducts; tmpOffset += CATEGORY_ENDPOINT_PRODUCT_COUNT) {
            categoryRequests.push(new Request({
                url: getCategoryEndpointUrl(country.code, country.languageCode, tmpOffset),
                userData: {
                    label: Labels.CATEGORY_ENDPOINT,
                    country,
                    offset: tmpOffset,
                },
            }));
        }
    }

    log.debug(`Enqueuing ${categoryRequests.length} category requests - ${request.loadedUrl}`);
    log.debug(`Enqueuing ${productRequests.length} product requests - ${request.loadedUrl}`);
    await crawler.addRequests([...categoryRequests, ...productRequests]);
});

/**
 * Gets description for product
 * Enqueues product endpoint requests.
 * Product color combinations are passed from category endpoint with imageUrl and url.
 */
router.addHandler(Labels.PRODUCT_PAGE, async ({ request, log, crawler, $ }) => {
    const { label, country, colorCombinations, productName } = request.userData;
    log.info(`${label}: Handling product page - ${request.loadedUrl}`);

    const description = getProductDescription($);
    if (description.length === 0) {
        log.info('Product detail is not available. Throwing away this product.');
        return;
    }

    const body = getProductEndpointBody(colorCombinations, country.code);

    const productDtoMap: Record<string, ProductDto> = {};
    (colorCombinations as ProductDto[]).forEach((product) => {
        productDtoMap[product.productId] = product;
    });

    const productEndpointRequest = new Request({
        url: PRODUCT_ENDPOINT_URL,
        payload: JSON.stringify(body),
        method: 'POST',
        userData: {
            label: Labels.PRODUCT_ENDPOINT,
            country,
            productName,
            description,
            productDtoMap,
        },
        useExtendedUniqueKey: true,
    });

    await crawler.addRequests([productEndpointRequest]);
});

/**
 * Gets categorization data.
 * Saves product information.
 */
router.addHandler(Labels.PRODUCT_ENDPOINT, async ({ log, request, json }) => {
    const { label, country, productName, description, productDtoMap } = request.userData;
    log.info(`${label}: Handling product endpoint - ${request.loadedUrl}`);
    const response = json as ProductResponse;

    // Endpoint randomly returns for some products null (even when they exist)
    response.hydratedProducts.forEach((product) => {
        if (product === null) throw new Error('Server did not send full response. This might happen randomly');
    });

    const timestamp = new Date().toISOString();
    const products = response.hydratedProducts.map((product) => {
        if (product === null) return null;

        const uniqueProductKey = `${product.color}_${country.code}`;

        // Some products have duplicates, everything should be scraped only once
        if (scrapedProducts[uniqueProductKey]) return null;
        scrapedProducts[uniqueProductKey] = true;

        const productDto = productDtoMap[product.cloudProductId] as ProductDto;
        const { url: urlPattern, imageUrl } = productDto;

        const url = getProductPageUrl(urlPattern, country.code);

        const { fullPrice: listPrice, currentPrice, isOnSale } = product;
        const salePrice = isOnSale ? currentPrice : null;

        const division = getDivisionName(product.genders);
        const category = getCategoryName(product.category);
        const subCategory = getSubCategoryName(product.subCategory);

        return {
            company: COMPANY,
            country: country.name,
            productName,
            articleNo: product.color,
            division,
            category,
            subCategory,
            listPrice,
            salePrice,
            currency: country.currency,
            description: description.length !== 0 ? description : null,
            url,
            imageUrl: imageUrl.length !== 0 ? imageUrl : null,
            timestamp,
        };
    }).filter((product) => product !== null);

    log.debug(`Response contains ${response.hydratedProducts.length} products`);
    log.debug(`Map contains ${Object.keys(productDtoMap).length} products`);
    log.debug(`To save ${products.length} products`);
    await Actor.pushData(products);
    actorStatistics.incrementCounter(products.length);
});
