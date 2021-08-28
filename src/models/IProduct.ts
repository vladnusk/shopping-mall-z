export interface IProduct {
    productId: string;
    name: string;
    image: string;
    isFavorite?: boolean;
    quantity?: number;
}