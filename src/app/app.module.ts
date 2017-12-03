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
import { SingleRequestPageComponent } from './components/single-request-page/single-request-page.component';
import { RequestCreationComponent } from './components/request-creation/request-creation.component';
import { UserPageComponent } from './components/user-page/user-page.component';

import { UserService } from './services/user.service';
import { RequestService } from './services/request.service';

import { UserModule } from './components/user/user.module';
import { LoginModule } from './components/login/login.module';
import { MainPageModule } from './components/main-page/main-page.module';
import { RequestsPageModule } from './components/requests-page/requests-page.module';
import { CalModule } from './components/calendar/calendar.module';
import { RequestCreationModule } from './components/request-creation/request-creation.module';
import { SingleRequestPageModule } from './components/single-request-page/single-request-page.module';
import { FormsModule } from '@angular/forms';
import { UserPageModule } from './components/user-page/user-page.module';

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
      SingleRequestPageModule,
      UserPageModule,
      FormsModule
  ],
  declarations: [
        AppComponent,
        UserComponent,
        LoginComponent,
        MainPageComponent,
        RequestsPageComponent,
        SingleRequestPageComponent,
        RequestCreationComponent,
        UserPageComponent
  ],
  providers: [
        UserService,
        RequestService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
