import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PadreProductosComponent } from './padre-productos/padre-productos.component';
import { HijoProductosComponent } from './hijo-productos/hijo-productos.component';
import { FormsModule } from '@angular/forms';
import { PadrePedidosComponent } from './padre-pedidos/padre-pedidos.component';
import { HijoPedidosComponent } from './hijo-pedidos/hijo-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreProductosComponent,
    HijoProductosComponent,
    PadrePedidosComponent,
    HijoPedidosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
