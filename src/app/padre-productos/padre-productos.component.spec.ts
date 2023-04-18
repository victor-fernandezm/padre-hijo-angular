import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreProductosComponent } from './padre-productos.component';

describe('PadreProductosComponent', () => {
  let component: PadreProductosComponent;
  let fixture: ComponentFixture<PadreProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
