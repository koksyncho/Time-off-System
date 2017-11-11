import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserPageRoutes } from './user-page.routes';
import { UserService } from '../../services/user.service';

import { UserPageComponent } from './user-page.component';

@NgModule({
  declarations: [
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    UserPageRoutes
  ],
  providers: [
    UserService
  ]
})
export class UserPageModule {}
