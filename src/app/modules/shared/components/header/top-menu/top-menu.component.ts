import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  selectedItem = 'INR';
  currency = ['USD', 'INR', 'EURO'];

  constructor() {}

  ngOnInit() {}
  currencyClick(ev) {
    this.selectedItem = ev;
  }
}
