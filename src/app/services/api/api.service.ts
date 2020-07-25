import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private EXCHANGE_RATE_API = "https://api.exchangeratesapi.io";

  constructor(
    private httpClient: HttpClient
    ) { }

  public getLatest() {
    return this.httpClient.get(`${this.EXCHANGE_RATE_API}/latest`);
  }

  public getConvertedCurrency(from: string, to: string) {
    return this.httpClient.get(`${this.EXCHANGE_RATE_API}/latest?base=${from}&?symbols=${to}`)
  }

  public getHistoryCurrency(dateFrom: string, dateTo: string, currencyFrom: string, currencyTo: string) {
    return this.httpClient.get(`${this.EXCHANGE_RATE_API}/history?start_at=${dateFrom}&end_at=${dateTo}&base=${currencyFrom}&symbols=${currencyTo}`)
  }
  
}
