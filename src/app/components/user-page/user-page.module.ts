import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserPageRoutes } from './user-page.routes';
import { UserService } from '../../services/user.service';

import { UserPageComponent } from './user-page.component';

@NgModule({
  declarations: [
    // UserComponent
  ],
  imports: [
    BrowserModule,
    UserPageRoutes,
    FormsModule
  ],
  providers: [
    UserService
  ]
})
export class UserPageModule {}
