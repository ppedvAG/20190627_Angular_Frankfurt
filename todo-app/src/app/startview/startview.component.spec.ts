import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartviewComponent } from './startview.component';

describe('StartviewComponent', () => {
  let component: StartviewComponent;
  let fixture: ComponentFixture<StartviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
