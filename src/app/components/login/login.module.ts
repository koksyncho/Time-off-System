import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRoutes } from './login.routes';
import { UserService } from '../../services/user.service';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    LoginRoutes,
    FormsModule
  ],
  providers: [
    UserService
  ]
})
export class LoginModule {}
