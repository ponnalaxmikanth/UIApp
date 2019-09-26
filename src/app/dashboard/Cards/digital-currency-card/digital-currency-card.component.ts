import { Component, OnInit } from '@angular/core';

import { DigitalCurrencyService } from '../../../Services/digital-currency.service';

@Component({
  selector: 'app-digital-currency-card',
  templateUrl: './digital-currency-card.component.html',
  styleUrls: ['./digital-currency-card.component.scss']
})
export class DigitalCurrencyCardComponent implements OnInit {

  public flipped = false;
  public currCurrentValue: any;

  constructor(private _digitalCurrencyService: DigitalCurrencyService) { }

  ngOnInit() {
    this._digitalCurrencyService.getCurrentValue().subscribe(val => {
      this.currCurrentValue = val;
    },
      error => {
        console.error('DigitalCurrencyCardComponent -- get digital currency Current Value', error);
      }
    );
  }

  toggleView() {
    this.flipped = !this.flipped;
  }

}
