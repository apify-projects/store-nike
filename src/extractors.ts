import { CheerioRoot } from 'crawlee';

export const getProductDescription = ($: CheerioRoot) => $('.description-preview p').text().trim();
