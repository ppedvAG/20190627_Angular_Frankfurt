import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExample3Component } from './forms-example3.component';

describe('FormsExample3Component', () => {
  let component: FormsExample3Component;
  let fixture: ComponentFixture<FormsExample3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsExample3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsExample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
