import { Component, OnInit } from '@angular/core';

import { AppService } from '../../../../app.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  constructor(public app_Service: AppService) {}
  ngOnInit() {}
  onSetTheme(theme) {
    this.app_Service.themelicked(theme);
  }
}
