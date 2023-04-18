import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrePedidosComponent } from './padre-pedidos.component';

describe('PadrePedidosComponent', () => {
  let component: PadrePedidosComponent;
  let fixture: ComponentFixture<PadrePedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadrePedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadrePedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
