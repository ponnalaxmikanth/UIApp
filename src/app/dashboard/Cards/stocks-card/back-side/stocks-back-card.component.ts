import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stocks-back-card',
  templateUrl: './stocks-back-card.component.html',
  styleUrls: ['./stocks-back-card.component.scss']
})
export class StocksBackCardComponent implements OnInit, OnChanges {

  @Input() stocksCurrentValue: any;

  public _stocksCurrentValue: any;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    try {
      this._stocksCurrentValue = changes.stocksCurrentValue.currentValue;
      //console.log('StocksBackCardComponent -- ngOnChanges', this._stocksCurrentValue);
    }
    catch (ex) { console.error('StocksBackCardComponent -- ngOnChanges', ex); }
  }

}
