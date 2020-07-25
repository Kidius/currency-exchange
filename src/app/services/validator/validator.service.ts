import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  public checkIfNumber(event: any) {
    var charCode: number = event.which;
    if((charCode >= 48 && charCode <= 57) || charCode == 46) {
    }else{
      event.preventDefault();
    }
  }
}
