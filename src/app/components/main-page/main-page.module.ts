import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainPageRoutes } from './main-page.routes';
import { UserService } from '../../services/user.service';

import { MainPageComponent } from './main-page.component';

@NgModule({
  declarations: [
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    MainPageRoutes,
    FormsModule
  ],
  providers: [
    UserService
  ]
})
export class MainPageModule {}
