import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoPedidosComponent } from './hijo-pedidos.component';

describe('HijoPedidosComponent', () => {
  let component: HijoPedidosComponent;
  let fixture: ComponentFixture<HijoPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
