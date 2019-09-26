import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-card',
  templateUrl: './accounts-card.component.html',
  styleUrls: ['./accounts-card.component.scss']
})
export class AccountsCardComponent implements OnInit {

  flipped = false;
  data: any;

  constructor() { }

  ngOnInit() {
    this.data = {
      Invest: 1000.00,
      Profit: 110.03,
      delta: { up: true },
    };
  }

  toggleView() {
    this.flipped = !this.flipped;
  }

}
