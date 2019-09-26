import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-funds-back-card',
  templateUrl: './funds-back-card.component.html',
  styleUrls: ['./funds-back-card.component.scss']
})
export class FundsBackCardComponent implements OnInit {

  @Input() fundsCurrentValue: any;

  public _fundsCurrentValue: any;
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    try {
      this._fundsCurrentValue = changes.fundsCurrentValue.currentValue;
      //console.log('FundsBackCardComponent -- ngOnChanges', this._fundsCurrentValue);
    }
    catch (ex) { console.error('FundsBackCardComponent -- ngOnChanges', ex); }
  }

}
