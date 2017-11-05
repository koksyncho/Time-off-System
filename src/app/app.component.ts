import { Component } from '@angular/core';
import { UserService } from './services/user.service';

import { Router } from '@angular/router';

import { Request } from './models/request';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService) { }
}
