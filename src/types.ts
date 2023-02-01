export interface InputSchema {
    debug?: boolean,
    inputCountry?: string
}

export interface CategoryResponse {
    data: {
        products: {
            products: {
                id: string,
                title: string,
                url: string,
                colorways: {
                    cloudProductId: string,
                    pdpUrl: string,
                    images: {
                        squarishURL: string,
                    },
                }[],
            }[],
            pages: {
                next: string,
                totalResources: number,
            },
        },
    }
}

export interface ProductResponse {
    hydratedProducts: {
        cloudProductId: string,
        genders: ApiGenders[],
        category: ApiCategories,
        subCategory: string[],
        currentPrice: number,
        fullPrice: number,
        isOnSale: boolean,
        country: string,
        color: string,
    }[]
}

export interface ProductDto {
    productId: string,
    url: string,
    imageUrl: string,
}

export enum ApiCategories {
    Clothing = 'APPAREL',
    Shoes = 'FOOTWEAR',
    Accessories = 'EQUIPMENT',
}

export enum ApiGenders {
    Men = 'MEN',
    Women = 'WOMEN',
    Boys = 'BOYS',
    Girls = 'GIRLS',
}

export enum DatasetCategories {
    Shoes = 'Shoes',
    Clothing = 'Clothing',
    Accessories = 'Accessories',
}

export enum DatasetDivisions {
    Kids = 'Kids',
    Women = 'Women',
    Men = 'Men',
    Unisex = 'Unisex',
}
