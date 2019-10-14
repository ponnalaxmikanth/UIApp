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
    
  }

  toggleView() {
    this.flipped = !this.flipped;
  }

}
