import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoProductosComponent } from './hijo-productos.component';

describe('HijoProductosComponent', () => {
  let component: HijoProductosComponent;
  let fixture: ComponentFixture<HijoProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
