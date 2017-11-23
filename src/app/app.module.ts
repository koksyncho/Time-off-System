import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
      BrowserModule,
      HttpModule,
      ReactiveFormsModule
  ],
  declarations: [
        AppComponent,
        UserComponent,
        LoginComponent
  ],
  providers: [
        UserService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
