import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCurrencyCustomDialogComponent } from './compare-currency-custom-dialog.component';

describe('CompareCurrencyCustomDialogComponent', () => {
  let component: CompareCurrencyCustomDialogComponent;
  let fixture: ComponentFixture<CompareCurrencyCustomDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareCurrencyCustomDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareCurrencyCustomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
