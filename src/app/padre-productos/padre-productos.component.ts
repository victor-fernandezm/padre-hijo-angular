import { Component } from '@angular/core';
import { PRODUCT_TYPE_TRANSLATION, Product, ProductType, getEnumAsArray } from '../model/product';

@Component({
	selector: 'app-padre-productos',
	templateUrl: './padre-productos.component.html',
	styleUrls: ['./padre-productos.component.css']
})
export class PadreProductosComponent {
	currentProduct: Product = new Product();

	addProduct() {
		this.products.push(this.currentProduct);
		this.currentProduct = new Product();
	}

	products: Product[] = [];
	options: [number, string][] = getEnumAsArray(ProductType);
}
