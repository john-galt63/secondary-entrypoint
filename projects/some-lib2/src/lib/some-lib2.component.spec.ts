import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeLib2Component } from './some-lib2.component';

describe('SomeLib2Component', () => {
  let component: SomeLib2Component;
  let fixture: ComponentFixture<SomeLib2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeLib2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeLib2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
