import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T02Component } from './t02.component';

describe('T02Component', () => {
  let component: T02Component;
  let fixture: ComponentFixture<T02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
