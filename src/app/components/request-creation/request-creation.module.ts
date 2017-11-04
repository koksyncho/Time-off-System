import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RequestCreationRoutes } from './request-creation.routes';
import { UserService } from '../../services/user.service';

import { RequestCreationComponent } from './request-creation.component';

@NgModule({
  declarations: [
    RequestCreationComponent
  ],
  imports: [
    BrowserModule,
    RequestCreationRoutes
  ],
  providers: [
  	UserService
  ]
})
export class RequestCreationModule {}
