import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserRoutes } from './user.routes';
import { UserService } from '../../services/user.service';

import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    // UserComponent
  ],
  imports: [
    BrowserModule,
    UserRoutes,
    FormsModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule {}
