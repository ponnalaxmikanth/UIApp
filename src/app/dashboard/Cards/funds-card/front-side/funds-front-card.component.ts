import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-funds-front-card',
  templateUrl: './funds-front-card.component.html',
  styleUrls: ['./funds-front-card.component.scss']
})
export class FundsFrontCardComponent implements OnInit, OnChanges {

  @Input() fundsCurrentValue: any;

  public _fundsCurrentValue: any;
  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    try {
      this._fundsCurrentValue = changes.fundsCurrentValue.currentValue;
      //console.log('FundsFrontCardComponent -- ngOnChanges', this._fundsCurrentValue);
    }
    catch (ex) { console.error('FundsFrontCardComponent -- ngOnChanges', ex); }
  }

}
