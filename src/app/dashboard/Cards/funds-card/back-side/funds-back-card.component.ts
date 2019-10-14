import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-funds-back-card',
  templateUrl: './funds-back-card.component.html',
  styleUrls: ['./funds-back-card.component.scss']
})
export class FundsBackCardComponent implements OnInit {

  @Input() fundsCurrentValue: any;

  public _fundsCurrentValue: any;
  public Investment: any;
  public Profit: any;
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    try {
      const val = changes.fundsCurrentValue.currentValue;
      if(val != null) {
        this.Investment = val.Current.Investment + val.Redeemed.Investment;
        this.Profit = (val.Current.CurrentValue + val.Redeemed.CurrentValue);
        this.Profit = this.Profit - (val.Current.Investment + val.Redeemed.Investment);
      }
      //console.log('FundsBackCardComponent -- ngOnChanges', this._fundsCurrentValue);
    }
    catch (ex) { console.error('FundsBackCardComponent -- ngOnChanges', ex); }
  }

}
