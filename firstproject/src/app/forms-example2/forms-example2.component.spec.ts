import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExample2Component } from './forms-example2.component';

describe('FormsExample2Component', () => {
  let component: FormsExample2Component;
  let fixture: ComponentFixture<FormsExample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsExample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
