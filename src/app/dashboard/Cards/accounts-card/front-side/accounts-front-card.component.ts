import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../../../Services/accounts.service';

@Component({
  selector: 'app-accounts-front-card',
  templateUrl: './accounts-front-card.component.html',
  styleUrls: ['./accounts-front-card.component.scss']
})
export class AccountsFrontCardComponent implements OnInit {

  data: any;
  constructor(private _accountsService: AccountsService) { }

  ngOnInit() {
    // this.data = {
    //   Savings: 1000.00,
    //   CreditCards: 110.03
    // };

    this._accountsService.getCurrentStatus().subscribe(val => {
      this.data = val;
      // console.log('AccountsFrontCardComponent -- getCurrentStatus', val, this.data);
    },
      error => {
        console.error('AccountsFrontCardComponent -- getCurrentStatus', error);
      }
    );
  }

}
