import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { environment } from '../../environments/environment';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({ providedIn: 'root' })
export class HomeService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = environment.apiUrl + 'api/';
  }

  getExpenses(): Observable<any> {
    if(environment.useMockData) {
      return this.httpClient.get('assets/MockData/Home/Expenses.json');
    }
    else {
      return this.httpClient.get(this.baseUrl + 'MutualFunds/getCurrentValue', httpOptions);
    }
  }

}
