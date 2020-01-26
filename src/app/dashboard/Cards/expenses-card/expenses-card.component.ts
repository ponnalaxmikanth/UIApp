import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../../Services/home.service';

@Component({
  selector: 'app-expenses-card',
  templateUrl: './expenses-card.component.html',
  styleUrls: ['./expenses-card.component.scss']
})
export class ExpensesCardComponent implements OnInit {
  public currentExpenses: any;
  public fromDate: Date;
  public toDate: Date;
  public graphperiod = true;

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    const nowdate = new Date();
    if (this.graphperiod) {
      this.fromDate = new Date(nowdate.getFullYear(), nowdate.getMonth(), 1);
    } else {
      this.fromDate = new Date(nowdate.getFullYear(), 0, 1);
    }
    this.toDate = new Date(nowdate.getFullYear(), nowdate.getMonth() + 1, 0);
    this.getExpenses(this.graphperiod);
  }

  onSwitchChange(event) {
    const nowdate = new Date();
    if (event) {
      this.fromDate = new Date(nowdate.getFullYear(), nowdate.getMonth(), 1);
    } else {
      this.fromDate = new Date(nowdate.getFullYear(), 0, 1);
    }
    this.toDate = new Date(nowdate.getFullYear(), nowdate.getMonth() + 1, 0);
    this.getExpenses(event);
  }

  loadExpenses(type: string) {
    if (this.graphperiod) {
      if (type === 'previous') {
        this.fromDate.setMonth(this.fromDate.getMonth() - 1);
      } else {
        this.fromDate.setMonth(this.fromDate.getMonth() + 1);
      }
      this.fromDate = new Date(this.fromDate.getFullYear(), this.fromDate.getMonth(), 1);
      this.toDate = new Date(this.fromDate.getFullYear(), this.fromDate.getMonth() + 1, 0);
    } else {
      const nowdate = new Date();
      if (type === 'previous') {
        this.fromDate.setFullYear(this.fromDate.getFullYear() - 1);
      } else {
        this.fromDate.setFullYear(this.fromDate.getFullYear() + 1);
      }
      this.fromDate = new Date(this.fromDate.getFullYear(), 0, 1);
      this.toDate.setFullYear(this.fromDate.getFullYear());
      if (nowdate.getFullYear() === this.toDate.getFullYear()) {
        this.toDate = new Date(nowdate.getFullYear(), nowdate.getMonth() + 1, 0);
      } else {
        this.toDate = new Date(this.toDate.getFullYear(), 11, 31);
      }
    }
    console.log('ExpensesCardComponent -- loadExpenses', this.fromDate, this.toDate);
    this.getExpenses(this.graphperiod);
  }

  getExpenses(flag) {
    this._homeService.getExpenses(this.fromDate, this.toDate).subscribe(val => {
      this.currentExpenses = val;
    },
      error => {
        console.error('ExpensesCardComponent -- get Current expenses', error);
      }
    );
  }

}
