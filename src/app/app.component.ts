import { Component } from '@angular/core';
import { MENU_ITEMS } from './Layout/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PersonalFinance';

  menu = MENU_ITEMS;
}
