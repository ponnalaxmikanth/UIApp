import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../../Services/home.service';

@Component({
  selector: 'app-expenses-card',
  templateUrl: './expenses-card.component.html',
  styleUrls: ['./expenses-card.component.scss']
})
export class ExpensesCardComponent implements OnInit {
  public currentExpenses: any;
  public overall: any;
  public fromDate: Date;
  public toDate: Date;

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this.overall = { Expenses: 158.15, Budget: 175 };
    const nowdate = new Date();
    this.fromDate = new Date(nowdate.getFullYear(), nowdate.getMonth(), 1);
    this.toDate = new Date(nowdate.getFullYear(), nowdate.getMonth() + 1, 0);
    //console.log('ExpensesCardComponent -- ngOnInit', this.fromDate, this.toDate);
    this._homeService.getExpenses(this.fromDate, this.toDate).subscribe(val => {
      this.currentExpenses = val;
      console.log('ExpensesCardComponent -- get Current expenses', this.currentExpenses);
    },
      error => {
        console.error('ExpensesCardComponent -- get Current expenses', error);
      }
    );
  }

}
