import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestsPageRoutes } from './requests-page.routes';
import { RequestService } from '../../services/request.service';

import { RequestsPageComponent } from './requests-page.component';

@NgModule({
  declarations: [
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    RequestsPageRoutes,
    FormsModule
  ],
  providers: [
    RequestService
  ]
})
export class RequestsPageModule {}
