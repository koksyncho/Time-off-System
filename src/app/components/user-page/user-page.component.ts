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
    users:User[];
  	constructor(private userService: UserService) { 
	  	this.users = [
	      {"id": "1", "username": "Name", "email": "name@email.com", "password": "namepass"},
	      {"id": "2", "username": "Name2", "email": "name2@email.com", "password": "name2pass"},
	      {"id": "3", "username": "Name3", "email": "name3@email.com", "password": "name3pass"}
	    ]; //this data will be coming from the server... this here is only for testing *to be removed*
  	}

  ngOnInit() {
  }

}
