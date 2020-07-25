import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCurrencyComponent } from './compare-currency.component';

describe('CompareCurrencyComponent', () => {
  let component: CompareCurrencyComponent;
  let fixture: ComponentFixture<CompareCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
