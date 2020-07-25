import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ValidatorService } from '../../services/validator/validator.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currencyIdList: string[];
  currencyFrom: string;
  currencyTo: string;
  amount: number;


  constructor( 
    private apiService: ApiService,
    private validator: ValidatorService
    )
     { }

  ngOnInit(): void {
    this.apiService.getLatest().subscribe((data: any[]) => {
      this.currencyIdList = Object.keys(data['rates']);
      this.currencyIdList.push('EUR');
      this.currencyFrom = this.currencyIdList[0];
      this.currencyTo = this.currencyIdList[1];
    })
    this.amount = 1;
  }

  checkIfNumber(event: any) {
    this.validator.checkIfNumber(event);
  }
  

}
