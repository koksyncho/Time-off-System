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
    user = new User("1234567", "1234567@.", "1234567");
  	constructor(private userService: UserService) { 
	  	this.users = [
	      {"username": "Nameeee", "email": "name@email.com", "password": "namepass"},
	      {"username": "Nameeee2", "email": "name2@email.com", "password": "name2pass"},
	      {"username": "Nameeee3", "email": "name3@email.com", "password": "name3pass"}
	    ]; //this data will be coming from the server... this here is only for testing *to be removed*
  	}

  ngOnInit() {
  }

}
