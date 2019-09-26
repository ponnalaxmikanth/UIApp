import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-front-card',
  templateUrl: './accounts-front-card.component.html',
  styleUrls: ['./accounts-front-card.component.scss']
})
export class AccountsFrontCardComponent implements OnInit {

  data: any;
  constructor() { }

  ngOnInit() {
    this.data = {
      Savings: 1000.00,
      CreditCards: 110.03
    };
  }

}
