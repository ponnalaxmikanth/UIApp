import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../Services/home.service';

@Component({
  selector: 'app-expenses-history-card',
  templateUrl: './expenses-history-card.component.html',
  styleUrls: ['./expenses-history-card.component.scss']
})
export class ExpensesHistoryCardComponent implements OnInit {
  public graphperiod = true;
  constructor(public  homeService: HomeService) {

  }

  ngOnInit() {
  }

  onSwitchChange(event) {
    console.log('ExpensesHistoryCardComponent -- onSwitchChange', event, this.graphperiod);
  }

}
