import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RequestsRoutes } from './requests.routes';
import { UserService } from '../../services/user.service';

import { RequestsComponent } from './requests.component';

@NgModule({
  declarations: [
    RequestsComponent
  ],
  imports: [
    BrowserModule,
    RequestsRoutes
  ],
  providers: [
  	UserService
  ]
})
export class RequestsModule {}
