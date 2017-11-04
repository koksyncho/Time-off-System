import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routes';

import { LoginModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';
import { CalModule } from './components/calendar/calendar.module';
import { MainPageModule } from './components/main-page/main-page.module';
import { RequestsModule } from './components/requests/requests.module';
import { UserPageModule } from './components/user-page/user-page.module';
import { RequestCreationModule } from './components/request-creation/request-creation.module';
import { SingleRequestModule } from './components/single-request/single-request.module';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoginRoutes } from './components/login/login.routes';
import { UserService } from './services/user.service';
import { SingleRequestRoutes } from './components/single-request/single-request.routes';
import { UserPageRoutes } from './components/user-page/user-page.routes';
import { RequestCreationRoutes } from './components/request-creation/request-creation.routes';
import { LoginComponent } from './components/login/login.component';
import { RequestCreationComponent } from './components/request-creation/request-creation.component';
import { SingleRequestComponent } from './components/single-request/single-request.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    LoginModule,
    RegisterModule,
    CalModule,
    LoginRoutes,
    UserPageRoutes,
    SingleRequestRoutes,
    RequestCreationRoutes,
    FormsModule,
    MainPageModule,
    RequestsModule,
    UserPageModule,
    RequestCreationModule,
    SingleRequestModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
