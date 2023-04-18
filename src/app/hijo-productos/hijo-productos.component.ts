import { Component, Input } from '@angular/core';
import { PRODUCT_TYPE_TRANSLATION, Product, ProductType, getEnumAsArray } from '../model/product';

@Component({
	selector: 'app-hijo-productos',
	templateUrl: './hijo-productos.component.html',
	styleUrls: ['./hijo-productos.component.css']
})
export class HijoProductosComponent {
	@Input() products: Product[] = [];
	
	options: [number, string][] = getEnumAsArray(ProductType);
}
