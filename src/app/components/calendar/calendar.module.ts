import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CalendarRoutes } from './calendar.routes';
import { UserService } from '../../services/user.service';
import { CalendarService } from '../../services/calendar.service';

import { CalendarComponent } from './calendar.component';
import { RcCalendarComponent } from './rc-calendar.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarUtilsModule } from '../calendar-utils/module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CalendarComponent,
    RcCalendarComponent
  ],
  imports: [
    BrowserModule,
    CalendarRoutes,
    CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    CalendarUtilsModule,
    BrowserAnimationsModule
  ],
  providers: [UserService, CalendarService],
  exports: [
    CalendarComponent,
    RcCalendarComponent
  ]
})
export class CalModule {}
