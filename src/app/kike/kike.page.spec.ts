import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KikePage } from './kike.page';

describe('KikePage', () => {
  let component: KikePage;
  let fixture: ComponentFixture<KikePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KikePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
