import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DavidPage } from './david.page';

describe('DavidPage', () => {
  let component: DavidPage;
  let fixture: ComponentFixture<DavidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DavidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DavidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
