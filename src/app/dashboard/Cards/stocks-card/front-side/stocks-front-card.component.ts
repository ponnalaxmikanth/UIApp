import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stocks-front-card',
  templateUrl: './stocks-front-card.component.html',
  styleUrls: ['./stocks-front-card.component.scss']
})
export class StocksFrontCardComponent implements OnInit, OnChanges {

  @Input() stocksCurrentValue: any;

  public _stocksCurrentValue: any;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    try {
      this._stocksCurrentValue = changes.stocksCurrentValue.currentValue;
      //console.log('StocksFrontCardComponent -- ngOnChanges', this._stocksCurrentValue);
    }
    catch (ex) { console.error('StocksFrontCardComponent -- ngOnChanges', ex); }
  }

}
