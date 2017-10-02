import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routes';

import { LoginModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';
import { LoginAttemptModule } from './components/login-attempt/login-attempt.module';

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
    LoginAttemptModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
