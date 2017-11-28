import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RequestsPageComponent } from './components/requests-page/requests-page.component';
import { CalendarComponent } from './components/calendar/calendar.component';

import { UserService } from './services/user.service';

import { UserModule } from './components/user/user.module';
import { LoginModule } from './components/login/login.module';
import { MainPageModule } from './components/main-page/main-page.module';
import { RequestsPageModule } from './components/requests-page/requests-page.module';
import { CalModule } from './components/calendar/calendar.module';
import { RequestCreationModule } from './components/request-creation/request-creation.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
      BrowserModule,
      HttpModule,
      AppRoutes,
      ReactiveFormsModule,
      UserModule,
      LoginModule,
      MainPageModule,
      RequestsPageModule,
      CalModule,
      RequestCreationModule,
      FormsModule
  ],
  declarations: [
        AppComponent,
        UserComponent,
        LoginComponent,
        MainPageComponent,
        RequestsPageComponent
  ],
  providers: [
        UserService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
