import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesMotelesPage } from './detalles-moteles.page';

describe('DetallesMotelesPage', () => {
  let component: DetallesMotelesPage;
  let fixture: ComponentFixture<DetallesMotelesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesMotelesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesMotelesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
