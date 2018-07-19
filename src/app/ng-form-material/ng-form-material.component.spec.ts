import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormMaterialComponent } from './ng-form-material.component';

describe('NgFormMaterialComponent', () => {
  let component: NgFormMaterialComponent;
  let fixture: ComponentFixture<NgFormMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFormMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
