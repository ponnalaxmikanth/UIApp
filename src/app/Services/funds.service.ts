import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { environment } from '../../environments/environment';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({ providedIn: 'root' })

export class FundsService {

  private baseUrl: string;
  public portfolios: any;
  //public currentValue: any;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = environment.apiUrl;

    this.getPortFolios().subscribe(val => {
      this.portfolios = val;
      //console.log('FundsService -- getPortFolios', this.portfolios);
    },
    error => {
      console.error('FundsService -- getPortFolios', error);
    });

    // this.getCurrentValue().subscribe(val => {
    //   this.currentValue = val;
    //   console.log('FundsService -- getCurrentValue', this.currentValue);
    // },
    // error => {
    //   console.error('FundsService -- getCurrentValue', error);
    // });

  }

  getPortFolios(): Observable<any> {
    if(environment.useMockData) {
      return this.httpClient.get('assets/MockData/Funds/PortFolios.json');
    }
    else {
      return this.httpClient.get(this.baseUrl + 'api/MutualFunds/GetPortfolios', httpOptions);
    }
  }

  getCurrentValue(): Observable<any> {
    if(environment.useMockData) {
      return this.httpClient.get('assets/MockData/Funds/CurrentValue.json');
    }
    else {
      return this.httpClient.get(this.baseUrl + 'api/MutualFunds/getCurrentValue', httpOptions);
    }
  }
  
}
