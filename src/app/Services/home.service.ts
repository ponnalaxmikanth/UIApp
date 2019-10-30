import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { environment } from '../../environments/environment';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({ providedIn: 'root' })
export class HomeService {
  private baseUrl: string;
  public totalExpenses = 0;
  public totalBudget = 0;
  public totalIncome = 0;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.apiUrl + 'api/';
  }

  getExpenses(fromDate: Date, toDate: Date): Observable<any> {
    if (environment.useMockData) {
      return this.httpClient.get('assets/MockData/Home/Expenses.json');
    } else {
      const request = { FromDate: fromDate, ToDate: toDate };
      return this.httpClient.post(this.baseUrl + 'Expenses/GetBudget', request, httpOptions);
    }
  }

  getExpensesChartData(): Observable<any> {
    if (environment.useMockData) {
      return this.httpClient.get('assets/MockData/Home/Expenses.json');
    } else {
      return this.httpClient.get(this.baseUrl + 'Expenses/GetExpensesChartData');
    }
  }

}
