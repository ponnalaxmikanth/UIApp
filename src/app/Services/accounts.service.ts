import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { environment } from '../../environments/environment';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({ providedIn: 'root' })

export class AccountsService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.apiUrl + 'api/';
 }

 getCurrentStatus(): Observable<any> {
   // console.log('AccountsService -- getCurrentStatus');
   if (environment.useMockData) {
      return this.httpClient.get('assets/MockData/Accounts/CurrentStatus.json');
    } else {
      return this.httpClient.get(this.baseUrl + 'Accounts/GetAccountStatusDetails');
    }
  }
}
