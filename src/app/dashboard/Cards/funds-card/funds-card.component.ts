import { Component, OnInit } from '@angular/core';

import { FundsService } from '../../../Services/funds.service';

@Component({
  selector: 'app-funds-card',
  templateUrl: './funds-card.component.html',
  styleUrls: ['./funds-card.component.scss']
})
export class FundsCardComponent implements OnInit {

  public flipped = false;
  public fundsCurrentValue: any;

  constructor(private _fundsService: FundsService) { }

  ngOnInit() {
    this._fundsService.getCurrentValue().subscribe(val => {
      console.log('FundsCardComponent -- get Funds Current Value', val);
      this.fundsCurrentValue = val;
    },
      error => {
        console.error('FundsCardComponent -- get Funds Current Value', error);
      }
    );
  }

  toggleView() {
    this.flipped = !this.flipped;
  }

}
