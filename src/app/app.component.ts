import { Component, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';

import { AppService } from './app.service';

@Component({
  selector: 'eCommerce-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value: any;
  subscription: Subscription;
  @HostBinding('class') componentCssClass;
  constructor(public overlayContainer: OverlayContainer, public app_Service: AppService) {}
  ngOnInit() {
    this.subscription = this.app_Service.getMessage().subscribe(className => {
      this.overlayContainer.getContainerElement().classList.add(className);
      this.componentCssClass = className;
    });
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
