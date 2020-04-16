import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Core1Component } from './core1.component';

describe('Core1Component', () => {
  let component: Core1Component;
  let fixture: ComponentFixture<Core1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Core1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Core1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
