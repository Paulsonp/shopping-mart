import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeRoutingModule } from './home-routing.module';
import { ViewHomeComponent } from './containers/view-home/view-home.component';

const COMPONENTS = [ViewHomeComponent];
@NgModule({
  imports: [CommonModule, MatButtonModule, FlexLayoutModule, HomeRoutingModule],
  declarations: [COMPONENTS]
})
export class HomeModule {}
