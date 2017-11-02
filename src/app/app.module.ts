import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routes';
import {HttpClientModule} from '@angular/common/http';

import { LoginModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';
import { MainPageModule } from './components/main-page/main-page.module';

import { AppComponent } from './app.component';
import { RequestsModule } from './components/requests/requests.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    LoginModule,
    RegisterModule,
    RequestsModule,
    HttpClientModule,
    MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
