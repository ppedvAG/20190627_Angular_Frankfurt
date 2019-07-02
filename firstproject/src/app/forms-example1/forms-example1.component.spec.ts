import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExample1Component } from './forms-example1.component';

describe('FormsExample1Component', () => {
  let component: FormsExample1Component;
  let fixture: ComponentFixture<FormsExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
