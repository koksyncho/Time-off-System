import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginRoutes } from './login.routes';
import { UserService } from '../../services/user.service';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    LoginRoutes
  ],
  providers: [
    UserService
  ]
})
export class LoginModule {}
