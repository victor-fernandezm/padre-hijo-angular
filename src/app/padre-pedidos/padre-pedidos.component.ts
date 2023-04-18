import { Component } from '@angular/core';
import { Pedido } from '../model/pedido';

@Component({
	selector: 'app-padre-pedidos',
	templateUrl: './padre-pedidos.component.html',
	styleUrls: ['./padre-pedidos.component.css']
})
export class PadrePedidosComponent {
	pedidos: Pedido[] = [];

	getPedidos(pedidosHijo: Pedido[]): void {
		this.pedidos = pedidosHijo;
	}
}
