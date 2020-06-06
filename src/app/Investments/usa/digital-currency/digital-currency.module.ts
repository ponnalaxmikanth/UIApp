import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitalCurrencyRoutingModule } from './digital-currency-routing.module';
import { DigitalCurrencyComponent } from './digital-currency.component';


@NgModule({
  declarations: [DigitalCurrencyComponent],
  imports: [
    CommonModule,
    DigitalCurrencyRoutingModule
  ]
})
export class DigitalCurrencyModule { }
