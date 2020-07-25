import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { Chart } from 'chart.js';
import { MatDialog } from '@angular/material/dialog';
import { CompareCurrencyCustomDialogComponent } from '../dialogs/compare-currency-custom-dialog/compare-currency-custom-dialog.component';
import { ChangeCurrencyDialogueComponent } from '../dialogs/change-currency-dialogue/change-currency-dialogue.component'
import { ValidatorService } from 'src/app/services/validator/validator.service';


@Component({
  selector: 'app-compare-currency',
  templateUrl: './compare-currency.component.html',
  styleUrls: ['./compare-currency.component.css']
})
export class CompareCurrencyComponent implements OnInit {

  currencyFrom: string;
  currencyTo: string;
  amount: number;
  converted: number;
  ctx: any;
  myChart: any;
  customDateFrom: Date;
  customDateTo: Date;
  currencyHistory: Object;
  from: Date;
  to: Date;
  currencyIdList: string[];

  constructor(private route: ActivatedRoute,
    private apiService: ApiService,
    public dialog: MatDialog,
    private validator: ValidatorService) { }
  

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currencyFrom = params.get('from');
      this.currencyTo = params.get('to');
      this.amount = parseFloat(params.get('amount'));
      this.updateComparison();
    });
    this.updateLastDays(30);
  }

  onClick30() {
    this.updateLastDays(30);
  }

  onClick90() {
    this.updateLastDays(90);

  }

  onClick180() {
    this.updateLastDays(180);
  }

  onClickCustom() {
    const dialogRef = this.dialog.open(CompareCurrencyCustomDialogComponent, {
      width: '300px',
      data: {from: this.from, to: this.to}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined){
        this.from = result['from'];
        this.to = result['to'];
        this.updateHistoryData(this.from, this.to);
      }
    });
  }

  onClickSwitch() {
    var tempFrom = this.currencyFrom;
    this.currencyFrom = this.currencyTo;
    this.currencyTo = tempFrom;
    this.updateComparison();
  }

  onClickChangeCurrency() {
    this.apiService.getLatest().subscribe((data: any[]) => {
      this.currencyIdList = Object.keys(data['rates']);
      this.currencyIdList.push('EUR');
      const dialogRef = this.dialog.open(ChangeCurrencyDialogueComponent, {
        width: '300px',
        data: {from: this.from, to: this.to, currencyIdList: this.currencyIdList}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result != undefined){
          if(result['from'] !== undefined) {
            this.currencyFrom = result['from'];
          }
          if(result['to'] !== undefined) {
            this.currencyTo = result['to'];
          }
          this.updateComparison();
          this.updateLastDays(30);
        }
      });
    })
  }

  onClickUpdate() {
    this.updateComparison();
  }

  updateComparison() {
    this.apiService.getConvertedCurrency(this.currencyFrom, this.currencyTo).subscribe((data: any[]) => {
      this.converted = Math.round((data['rates'][this.currencyTo] * this.amount) * 10000) / 10000;
    })
  }

  //Checking if input is number manually because firefox allows inputing letters in number fields
  checkIfNumber(event: any) {
    this.validator.checkIfNumber(event);
  }

  private updateLastDays(days: number) {
    var currentDate = new Date();
    var fromDate = new Date();
    fromDate.setDate(currentDate.getDate()-days);
    this.updateHistoryData(fromDate, currentDate);
  }

  private chartStartup() {
    this.ctx = document.getElementById('myChart');
    this.myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: Object.keys(this.currencyHistory),
          datasets: [{
              label: this.currencyFrom + ' to ' + this.currencyTo + ' history',
              data: Object.values(this.currencyHistory),
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          },
          responsive: true
      }
  });
  }

  private updateHistoryData(from: Date, to: Date) {
    var fromString: string = from.getFullYear() + '-' + (from.getMonth() + 1) + '-' + from.getDate();
    var toString: string = to.getFullYear() + '-' + (to.getMonth() + 1) + '-' + to.getDate();
    this.apiService.getHistoryCurrency(fromString, toString, this.currencyFrom, this.currencyTo).subscribe((data: any[], to=this.currencyTo) => {
      var ordered: Object = {}
      Object.keys(data['rates'])
      .sort()
      .forEach(function(key) {
          ordered[key] = data['rates'][key][to];
       });
      this.currencyHistory = ordered;
      this.chartStartup();
    })
  }

}
