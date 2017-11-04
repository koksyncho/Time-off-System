import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainPageRoutes } from './main-page.routes';
import { UserService } from '../../services/user.service';

import { MainPageComponent } from './main-page.component';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    MainPageRoutes
  ],
  providers: [
    UserService
  ]
})
export class MainPageModule {}
