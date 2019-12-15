import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpensesComponent } from './Home/expenses/expenses.component';
import { FundsComponent } from './Investments/funds/funds.component';
import { StocksComponent } from './Investments/stocks/stocks.component';

const routes: Routes = [
  //{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module') },
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Expenses', component: ExpensesComponent },
  { path: 'funds', component: FundsComponent },
  { path: 'Stocks', component: StocksComponent },
];

@NgModule({
  //imports: [RouterModule.forRoot(routes, { enableTracing: true, useHash: true })],
  imports: [RouterModule.forRoot(routes,
     { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
