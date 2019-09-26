import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbButtonModule, NbActionsModule  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule, NbMenuModule } from '@nebular/theme';

import { HeaderComponent } from './Layout/header/header.component';
import { MenuComponent } from './Layout/menu/menu.component';

import { DashboardModule } from './dashboard/dashboard.module';
import {DashboardComponent } from './dashboard/dashboard.component';
import { StocksComponent } from './Investments/stocks/stocks.component';
import { ExpensesComponent } from './Home/expenses/expenses.component';
import { FundsComponent } from './Investments/funds/funds.component';

import { DigitalCurrencyService } from './Services/digital-currency.service';
import { FundsService } from './Services/funds.service';
import { HomeService } from './Services/home.service';
import { StocksService } from './Services/stocks.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent
    //, DashboardComponent
    , StocksComponent, ExpensesComponent, FundsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbEvaIconsModule
    , NbMenuModule.forRoot()
    , NbLayoutModule
    , NbButtonModule
    , NbSidebarModule.forRoot()
    , NbActionsModule 
    , NbIconModule
    , HttpClientModule
    , DashboardModule
  ],
  providers: [DigitalCurrencyService, FundsService, HomeService, StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
