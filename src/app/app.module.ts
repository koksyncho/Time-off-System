import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routes';

import { LoginModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';
import { CalModule } from './components/calendar/calendar.module';
import { MainPageModule } from './components/main-page/main-page.module';
import { RequestsModule } from './components/requests/requests.module';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoginRoutes } from './components/login/login.routes';
import { UserService } from './services/user.service';
import { LoginComponent } from './components/login/login.component';

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
    FormsModule,
    MainPageModule,
    RequestsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
