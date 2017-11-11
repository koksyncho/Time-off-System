import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RequestsRoutes } from './requests.routes';
import { UserService } from '../../services/user.service';
import { HttpModule, JsonpModule} from '@angular/http';


import { RequestsComponent } from './requests.component';
import { RequestService } from '../../services/request.service';

@NgModule({
  declarations: [
    RequestsComponent
  ],
  imports: [
    BrowserModule,
    RequestsRoutes,
    HttpModule,
    JsonpModule
  ],
  providers: [
  	RequestService
  ]
})
export class RequestsModule {}
