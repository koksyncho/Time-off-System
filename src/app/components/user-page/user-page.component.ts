import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { Router } from '@angular/router';

import { Request } from '../../models/request';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-page',
  templateUrl: '../../templates/user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
    user:User;
  	constructor(private userService: UserService) { 

      this.user = userService.getCurrentUser();

  	}


  ngOnInit() {
  }

  public getCurrUser():User
  {
    return this.user;
  }

}
