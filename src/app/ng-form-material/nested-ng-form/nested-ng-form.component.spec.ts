import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedNgFormComponent } from './nested-ng-form.component';

describe('NestedNgFormComponent', () => {
  let component: NestedNgFormComponent;
  let fixture: ComponentFixture<NestedNgFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedNgFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedNgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
