import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SingleRequestRoutes } from './single-request.routes';
import { UserService } from '../../services/user.service';

import { SingleRequestComponent } from './single-request.component';

@NgModule({
  declarations: [
    SingleRequestComponent
  ],
  imports: [
    BrowserModule,
    SingleRequestRoutes
  ],
  providers: [
  	UserService
  ]
})
export class SingleRequestModule {}
