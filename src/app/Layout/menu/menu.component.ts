import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Funds',
    icon: 'layout-outline',
    link: '/Funds',
  },
  {
    title: 'Stocks',
    icon: 'edit-2-outline',
    link: '/Stocks',
  },
  {
    title: 'Expenses',
    icon: 'edit-2-outline',
    link: '/Expenses',
  },
  
];
