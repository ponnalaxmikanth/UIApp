import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule } from 'primeng/calendar';

import { IncomeRoutingModule } from './income-routing.module';
import { IncomeComponent } from './income.component';


@NgModule({
  declarations: [IncomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    CalendarModule,
    IncomeRoutingModule
  ]
})
export class IncomeModule { }
