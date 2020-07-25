import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  from: Date;
  to: Date;
}

@Component({
  selector: 'app-compare-currency-custom-dialog',
  templateUrl: './compare-currency-custom-dialog.component.html',
})
export class CompareCurrencyCustomDialogComponent{
  
  constructor(
    public dialogRef: MatDialogRef<CompareCurrencyCustomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
