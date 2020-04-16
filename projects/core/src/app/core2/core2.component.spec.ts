import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Core2Component } from './core2.component';

describe('Core2Component', () => {
  let component: Core2Component;
  let fixture: ComponentFixture<Core2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Core2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Core2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
