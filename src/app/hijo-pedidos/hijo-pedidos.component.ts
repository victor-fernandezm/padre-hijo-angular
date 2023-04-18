import { Component, EventEmitter, Output } from '@angular/core';
import { Pedido } from '../model/pedido';

@Component({
	selector: 'app-hijo-pedidos',
	templateUrl: './hijo-pedidos.component.html',
	styleUrls: ['./hijo-pedidos.component.css']
})
export class HijoPedidosComponent {
	@Output() pedidoEvent: EventEmitter<Pedido[]> = new EventEmitter<Pedido[]>();
	pedidos: Pedido[] = [];
	currentPedido: Pedido = new Pedido();

	addPedido(): void {
		this.pedidos.push(this.currentPedido);
		this.currentPedido = new Pedido();
		this.pedidoEvent.emit(this.pedidos);
	}
}
