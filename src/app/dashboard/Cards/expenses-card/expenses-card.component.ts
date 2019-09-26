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

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this.overall = { Expenses: 158.15, Budget: 175 };
    this._homeService.getExpenses().subscribe(val => {
      this.currentExpenses = val;
      //console.log('ExpensesCardComponent -- get Current expenses', this.currentExpenses);
    },
      error => {
        console.error('ExpensesCardComponent -- get Current expenses', error);
      }
    );
  }

}
