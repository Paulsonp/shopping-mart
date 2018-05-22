import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TopMenuComponent } from './components/header/top-menu/top-menu.component';
import { HeaderComponent } from './components/header/header.component';

const COMPONENTS = [TopBarComponent, TopMenuComponent, HeaderComponent];

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatIconModule, MatToolbarModule, MatMenuModule, MatSelectModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class SharedModule {}
