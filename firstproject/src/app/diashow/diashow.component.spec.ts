import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiashowComponent } from './diashow.component';

describe('DiashowComponent', () => {
  let component: DiashowComponent;
  let fixture: ComponentFixture<DiashowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiashowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiashowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
