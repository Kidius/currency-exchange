import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  from: Date;
  to: Date;
  currencyIdList: string[];
}

@Component({
  selector: 'app-change-currency-dialogue',
  templateUrl: './change-currency-dialogue.component.html',
})
export class ChangeCurrencyDialogueComponent{
  
  constructor(
    public dialogRef: MatDialogRef<ChangeCurrencyDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}