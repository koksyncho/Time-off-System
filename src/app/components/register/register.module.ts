import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterRoutes } from './register.routes';
import { UserService } from '../../services/user.service';

import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RegisterRoutes,
    FormsModule
  ],
  providers: [
    UserService
  ]
})
export class RegisterModule {}
