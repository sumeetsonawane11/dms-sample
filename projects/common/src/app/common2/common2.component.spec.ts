import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Common2Component } from './common2.component';

describe('Common2Component', () => {
  let component: Common2Component;
  let fixture: ComponentFixture<Common2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Common2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Common2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
