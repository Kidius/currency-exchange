import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCurrencyDialogueComponent } from './change-currency-dialogue.component';

describe('ChangeCurrencyDialogueComponent', () => {
  let component: ChangeCurrencyDialogueComponent;
  let fixture: ComponentFixture<ChangeCurrencyDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCurrencyDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCurrencyDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
