import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleRequestPageRoutes } from './single-request-page.routes';
import { RequestService } from '../../services/request.service';
import { UserService } from '../../services/user.service';

import { SingleRequestPageComponent } from './single-request-page.component';

@NgModule({
  declarations: [
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    SingleRequestPageRoutes,
    FormsModule
  ],
  providers: [
    RequestService,
    UserService
  ]
})
export class SingleRequestPageModule {}
