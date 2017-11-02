import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RequestsRoutes } from './requests.routes';
import { UserService } from '../../services/user.service';

import { RequestsComponent } from './requests.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoUtilsModule } from '../demo-utils/module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    RequestsComponent
  ],
  imports: [
    BrowserModule,
    RequestsRoutes,
    CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    DemoUtilsModule,
    BrowserAnimationsModule
  ],
  providers: [UserService],
  exports: [RequestsComponent]
})
export class RequestsModule {}
