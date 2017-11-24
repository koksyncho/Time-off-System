import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RequestCreationRoutes } from './request-creation.routes';
import { UserService } from '../../services/user.service';
import { CalendarService } from '../../services/calendar.service';
import { RequestCreationComponent } from './request-creation.component';
import { CalModule } from '../calendar/calendar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RequestCreationComponent,
  ],
  imports: [
    BrowserModule,
    RequestCreationRoutes,
    CalModule,
    FormsModule
  ],
  providers: [
    UserService
  ]
})
export class RequestCreationModule {}
