export enum ProductType {
    DRINK,
    FOOD,
    CLEANING_PRODUCT,
    CONDIMENT,
    NOT_SPECIFIED
};

export const PRODUCT_TYPE_TRANSLATION: string[] = ["Bebida", "Comida", "Producto de Limpieza", "Condimento", "Sin especificar"];

export function getEnumAsArray<T extends {}>(enumType: T): [number, string][] {
    return Object.values(enumType).filter((v, i ,arr) => typeof v === 'number').map((v, i, arr) => [i, PRODUCT_TYPE_TRANSLATION[v as number]]);
}

export class Product {
    static idCounter: number = 0;
    id: number = 0;
    name: string = "";
    quantity: number = 0;
    price: number = 0;
    type: ProductType = ProductType.NOT_SPECIFIED;

    constructor() {
        this.id = Product.idCounter;
        Product.idCounter++;
    }
};
