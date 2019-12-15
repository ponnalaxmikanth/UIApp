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
    this.getExpenses(this.graphperiod);
  }

  onSwitchChange(event) {
    console.log(event);
    this.getExpenses(event);
  }

  getExpenses(flag) {
    const nowdate = new Date();
    if (flag) {
      this.fromDate = new Date(nowdate.getFullYear(), nowdate.getMonth(), 1);
    } else {
      this.fromDate = new Date(nowdate.getFullYear(), 0, 1);
    }

    this.toDate = new Date(nowdate.getFullYear(), nowdate.getMonth() + 1, 0);
    console.log('ExpensesCardComponent -- ngOnInit', this.fromDate, this.toDate);
    this._homeService.getExpenses(this.fromDate, this.toDate).subscribe(val => {
      this.currentExpenses = val;
    },
      error => {
        console.error('ExpensesCardComponent -- get Current expenses', error);
      }
    );
  }

}
