import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewHomeComponent } from './containers/view-home/view-home.component';

const routes: Routes = [
  {
    path: '',
    component: ViewHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
