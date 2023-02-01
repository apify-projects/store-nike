import { Request } from 'crawlee';
import { API_BASE_URL, BASE_URL, CATEGORY_ENDPOINT_PRODUCT_COUNT, CONSUMER_ID, COUNTRIES, Labels } from './constants.js';
import { ApiCategories, ApiGenders, DatasetCategories, DatasetDivisions, ProductDto } from './types.js';

export const getStartUrls = (inputCountry: string | undefined) => {
    const offset = 0;
    const inputCountryDetails = COUNTRIES.filter(countryDetails => countryDetails.name === inputCountry)

    return inputCountryDetails.map((country) => {
        return new Request({
            url: getCategoryEndpointUrl(country.code, country.languageCode, offset),
            userData: {
                label: Labels.CATEGORY_ENDPOINT,
                offset,
                country,
            },
        });
    });
};

export const getCategoryEndpointUrl = (countryCode: string, languageCode: string, offset: number) => {
    // cannot use URLSearchParams as filter query parameter is used multiple times
    const endpointUrl = `/product_feed/rollup_threads/v2?`
        + `filter=marketplace(${countryCode.toUpperCase()})`
        + `&filter=language(${languageCode})`
        + `&filter=employeePrice(true)`
        + `&anchor=${offset}`
        + `&count=${CATEGORY_ENDPOINT_PRODUCT_COUNT}`
        + `&consumerChannelId=${CONSUMER_ID}`;

    const url = new URL('/cic/browse/v2', API_BASE_URL);
    url.searchParams.set('queryid', 'products');
    url.searchParams.set('country', countryCode);
    url.searchParams.set('language', languageCode);
    url.searchParams.set('endpoint', endpointUrl);
    return url.toString();
};

export const getProductPageUrl = (urlPattern: string, countryCode: string) => {
    const path = urlPattern.replace('{countryLang}', countryCode);
    const url = new URL(path, BASE_URL);
    return url.toString();
};

export const getProductEndpointBody = (products: ProductDto[], countryCode: string) => {
    const cloudProducts = products.map((product) => {
        return {
            cloudProductId: product.productId,
        };
    });

    return {
        experienceProducts: cloudProducts,
        country: countryCode,
    };
};

export const getDivisionName = (genders: ApiGenders[]) => {
    const kidsGenders = [ApiGenders.Boys, ApiGenders.Girls];

    const mappedDivisions = genders.map((gender) => {
        if (kidsGenders.includes(gender)) return DatasetDivisions.Kids;
        if (gender === ApiGenders.Men) return DatasetDivisions.Men;
        return DatasetDivisions.Women;
    });

    if (mappedDivisions.includes(DatasetDivisions.Kids)) return DatasetDivisions.Kids;

    const isMenDivision = mappedDivisions.includes(DatasetDivisions.Men);
    const isWomenDivision = mappedDivisions.includes(DatasetDivisions.Women);

    if (isMenDivision && isWomenDivision) return DatasetDivisions.Unisex;
    if (isMenDivision) return DatasetDivisions.Men;
    return DatasetDivisions.Women;
};

export const getCategoryName = (category: ApiCategories) => {
    switch (category) {
        case ApiCategories.Shoes:
            return DatasetCategories.Shoes;
        case ApiCategories.Clothing:
            return DatasetCategories.Clothing;
        default:
            return DatasetCategories.Accessories;
    }
};

export const getSubCategoryName = (subcategories: string[]) => {
    return subcategories[0];
};
