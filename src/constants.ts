export const BASE_URL = 'https://nike.com';
export const API_BASE_URL = 'https://api.nike.com';
export const CLOUD_BASE_URL = 'https://product-proxy-v2.adtech-prod.nikecloud.com';
export const PRODUCT_ENDPOINT_URL = `${CLOUD_BASE_URL}/products`;

// Cannot be higher than 60!
export const CATEGORY_ENDPOINT_PRODUCT_COUNT = 60;

export const CONSUMER_ID = 'd9a5bc42-4b9c-4976-858a-f159cf99c647';

export const CONCURRENCY = 30;
// Has to be high, because product detail request randomly returns null for some color combinations
export const MAX_RETRIES = 15;

export const LOGGING_PERIOD = 120;

export const STATISTICS_KEY = 'STATISTICS';
export const STATE_KEY = 'STATE-NIKE-INTERNATIONAL';
export const SCRAPED_PRODUCTS_KEY = 'SCRAPED_PRODUCTS';

export const COMPANY = 'NIKE';

export const COUNTRIES = [
    {
        name: 'USA',
        code: 'us',
        languageCode: 'en',
        currency: 'USD',
        isEnglish: true,
    },
    {
        name: 'MEXICO',
        code: 'mx',
        languageCode: 'es-419',
        currency: 'MXN',
        isEnglish: false,
    },
    {
        name: 'FRANCE',
        code: 'fr',
        languageCode: 'fr',
        currency: 'EUR',
        isEnglish: false,
    },
    {
        name: 'GERMANY',
        code: 'de',
        languageCode: 'de',
        currency: 'EUR',
        isEnglish: false,
    },
    {
        name: 'ITALY',
        code: 'it',
        languageCode: 'it',
        currency: 'EUR',
        isEnglish: false,
    },
    {
        name: 'AUSTRALIA',
        code: 'au',
        languageCode: 'en-GB',
        currency: 'AUD',
        isEnglish: true,
    },
    {
        name: 'CANADA',
        code: 'ca',
        languageCode: 'en-GB',
        currency: 'CAD',
        isEnglish: true,
    },
    {
        name: 'SPAIN',
        code: 'es',
        languageCode: 'es-ES',
        currency: 'EUR',
        isEnglish: false,
    },
    {
        name: 'UNITED KINGDOM',
        code: 'gb',
        languageCode: 'en-GB',
        currency: 'GBP',
        isEnglish: true,
    },
    {
        name: 'CHINA',
        code: 'cn',
        languageCode: 'zh-Hans', // This how I found it on the Chinese website
        currency: 'CNY',
        isEnglish: false,
    }
];

export const Labels = {
    HOMEPAGE: 'homepage',
    CATEGORY_PAGE: 'categoryPage',
    CATEGORY_ENDPOINT: 'categoryEndpoint',
    PRODUCT_PAGE: 'productPage',
    PRODUCT_ENDPOINT: 'productEndpoint',
};
