import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { AppRoutes } from './app.routes';
import { LoginModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';
import { CalModule } from './components/calendar/calendar.module';
import { FormsModule } from '@angular/forms';
import { RequestCreationModule } from './components/request-creation/request-creation.module';

@NgModule({
  imports: [
      BrowserModule,
      HttpModule,
      ReactiveFormsModule,
      LoginModule,
      RegisterModule,
      CalModule,
      AppRoutes,
      RequestCreationModule
  ],
  declarations: [
        AppComponent
  ],
  providers: [
        UserService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
