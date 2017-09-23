import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RegisterRoutes } from './register.routes';
import { UserService } from '../../services/user.service';

import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RegisterRoutes
  ],
  providers: [
    UserService
  ]
})
export class RegisterModule {}
