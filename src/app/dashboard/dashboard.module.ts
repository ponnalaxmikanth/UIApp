import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbCardModule, NbIconModule } from '@nebular/theme';
import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbButtonModule, NbActionsModule, NbListModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
// import { UiSwitchModule } from 'ngx-toggle-switch';
import { UiSwitchModule } from 'ngx-ui-switch';

// import { DigitalCurrencyService } from '../Services/digital-currency.service';
// import { FundsService } from '../Services/funds.service';
// import { HomeService } from '../Services/home.service';
// import { StocksService } from '../Services/stocks.service';

//import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StocksCardComponent } from './Cards/stocks-card/stocks-card.component';
import { StocksFrontCardComponent } from './Cards/stocks-card/front-side/stocks-front-card.component';
import { StocksBackCardComponent } from './Cards/stocks-card/back-side/stocks-back-card.component';
import { DigitalCurrencyCardComponent } from '../dashboard/Cards/digital-currency-card/digital-currency-card.component';
import { FrontCardComponent } from '../dashboard/Cards/digital-currency-card/front-side/front-card.component';
import { BackCardComponent } from '../dashboard/Cards/digital-currency-card/back-side/back-card.component';
import { FundsCardComponent } from '../dashboard/Cards/funds-card/funds-card.component';
import { AccountsCardComponent } from '../dashboard/Cards/accounts-card/accounts-card.component';
import { FundsFrontCardComponent } from '../dashboard/Cards/funds-card/front-side/funds-front-card.component';
import { AccountsFrontCardComponent } from '../dashboard/Cards/accounts-card/front-side/accounts-front-card.component';
import { AccountsBackCardComponent } from '../dashboard/Cards/accounts-card/back-side/accounts-back-card.component';
import { FundsBackCardComponent } from '../dashboard/Cards/funds-card/back-side/funds-back-card.component';
import { ExpensesCardComponent } from './Cards/expenses-card/expenses-card.component';
import { ExpensesHistoryCardComponent } from './Cards/expenses-history-card/expenses-history-card.component';
import { ExpensesChartComponent } from './Cards/expenses-history-card/expenses-chart/expenses-chart.component';

@NgModule({
  declarations: [DashboardComponent, StocksCardComponent, StocksFrontCardComponent, StocksBackCardComponent, DigitalCurrencyCardComponent, FrontCardComponent, BackCardComponent, FundsCardComponent, AccountsCardComponent, FundsFrontCardComponent, AccountsFrontCardComponent, AccountsBackCardComponent, FundsBackCardComponent, ExpensesCardComponent, ExpensesHistoryCardComponent, ExpensesChartComponent],
  imports: [
    CommonModule
    , NbCardModule
    , NbThemeModule, NbSidebarModule, NbLayoutModule, NbButtonModule, NbActionsModule, NbIconModule, NbListModule
    , FormsModule
    , UiSwitchModule
    //DashboardRoutingModule
  ],
  //providers: [DigitalCurrencyService, FundsService, HomeService, StocksService],
  bootstrap: [DashboardComponent]
})

export class DashboardModule { }
