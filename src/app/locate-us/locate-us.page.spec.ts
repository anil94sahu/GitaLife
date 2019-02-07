import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocateUsPage } from './locate-us.page';

describe('LocateUsPage', () => {
  let component: LocateUsPage;
  let fixture: ComponentFixture<LocateUsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateUsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocateUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
