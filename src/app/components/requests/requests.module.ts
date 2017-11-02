import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RequestsRoutes } from './requests.routes';
import { UserService } from '../../services/user.service';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { RequestsComponent } from './requests.component';

@NgModule({
  declarations: [
    RequestsComponent
  ],
  imports: [
    BrowserModule,
    RequestsRoutes,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class RequestsModule {}
