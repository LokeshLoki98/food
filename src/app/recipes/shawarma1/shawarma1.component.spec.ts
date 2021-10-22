import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shawarma1Component } from './shawarma1.component';

describe('Shawarma1Component', () => {
  let component: Shawarma1Component;
  let fixture: ComponentFixture<Shawarma1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shawarma1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Shawarma1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
