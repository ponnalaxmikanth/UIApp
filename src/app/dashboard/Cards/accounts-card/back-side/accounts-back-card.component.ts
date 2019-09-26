import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-back-card',
  templateUrl: './accounts-back-card.component.html',
  styleUrls: ['./accounts-back-card.component.scss']
})
export class AccountsBackCardComponent implements OnInit {

  data: any;
  constructor() { }

  ngOnInit() {
    this.data = {
      Invest: 1000.00,
      Profit: -10.03,
      delta: { up: false },
    };
  }

}
