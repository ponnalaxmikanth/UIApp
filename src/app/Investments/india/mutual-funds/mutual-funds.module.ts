import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbButtonModule, NbActionsModule  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbCardModule, NbIconModule, NbMenuModule } from '@nebular/theme';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { MutualFundsRoutingModule } from './mutual-funds-routing.module';
import { MutualFundsComponent } from './mutual-funds.component';
import { PerformanceComponent } from '../../funds/performance/performance.component';


@NgModule({
  declarations: [
    MutualFundsComponent,
    PerformanceComponent,
  ],
  imports: [
    CommonModule,
    // NbThemeModule.forRoot({ name: 'corporate' }),
    // NbEvaIconsModule,
    // NbMenuModule.forRoot(),
    // NbLayoutModule,
    // NbButtonModule,
    // NbSidebarModule.forRoot(),
    // NbActionsModule,
    // NbIconModule,
    // NgbModule,
    // NbCardModule,
    MutualFundsRoutingModule
  ],
  bootstrap: [MutualFundsComponent]
})
export class MutualFundsModule { }
