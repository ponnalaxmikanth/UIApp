import { Component, OnInit } from '@angular/core';

import { StocksService } from '../../../Services/stocks.service';

@Component({
  selector: 'app-stocks-card',
  templateUrl: './stocks-card.component.html',
  styleUrls: ['./stocks-card.component.scss']
})
export class StocksCardComponent implements OnInit {

  public flipped = false;
  public stocksCurrentValue: any;

  constructor(private _stocksService: StocksService) { }

  ngOnInit() {
    this._stocksService.getCurrentValue().subscribe(val => {
      this.stocksCurrentValue = val;
      //console.log('StocksCardComponent -- get stocks Current Value', this.stocksCurrentValue);
    },
      error => {
        console.error('StocksCardComponent -- get stocks Current Value', error);
      }
    );
  }

  toggleView() {
    this.flipped = !this.flipped;
  }
}
