import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Features3Component } from './features3.component';

describe('Features3Component', () => {
  let component: Features3Component;
  let fixture: ComponentFixture<Features3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
