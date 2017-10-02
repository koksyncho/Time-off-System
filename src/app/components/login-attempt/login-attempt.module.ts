import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginAttemptRoutes } from './login-attempt.routes';
import { UserService } from '../../services/user.service';

import { LoginAttemptComponent } from './login-attempt.component';

@NgModule({
  declarations: [
    LoginAttemptComponent
  ],
  imports: [
    BrowserModule,
    LoginAttemptRoutes
  ],
  providers: [
    UserService
  ]
})
export class LoginAttemptModule {}
