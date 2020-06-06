import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  //{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module') },
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'investment/india/mutual-funds'
  , loadChildren: () => import('./investments/india/mutual-funds/mutual-funds.module').then(m => m.MutualFundsModule)
  },
  {
    path: 'investment/usa/stocks',
    loadChildren: () => import('./investments/usa/stocks/stocks.module').then(m => m.StocksModule)
  },
  {
    path: 'usa/expenses',
    loadChildren: () => import('./usa/expenses/expenses.module').then(m => m.ExpensesModule)
  },
  {
    path: 'usa/income',
    loadChildren: () => import('./usa/income/income.module').then(m => m.IncomeModule)
  },
  {
    path: 'usa/budget',
    loadChildren: () => import('./usa/budget/budget.module').then(m => m.BudgetModule)
  },
  {
    path: 'investment/usa/digital-currency',
    loadChildren: () => import('./investments/usa/digital-currency/digital-currency.module')
      .then(m => m.DigitalCurrencyModule)
  },
];

@NgModule({
  //imports: [RouterModule.forRoot(routes, { enableTracing: true, useHash: true })],
  imports: [RouterModule.forRoot(routes, { useHash: true }
    //  { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
