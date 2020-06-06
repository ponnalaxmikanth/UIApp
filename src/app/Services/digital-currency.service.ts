import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { environment } from '../../environments/environment';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({ providedIn: 'root' })

export class DigitalCurrencyService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  getCurrentValue(): Observable<any> {
    if (environment.useMockData) {
      return this.httpClient.get('assets/MockData/Stocks/CurrentValue.json');
    } else {
      return this.httpClient.get(this.baseUrl + 'api/DigitalCurrency/GetInvestmentDetails');
    }
  }

}
