import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Request } from '../../models/request';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-main-page',
  templateUrl: '../../templates/main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  child_variable_gosho: string;
  test_var = "test";

  isUserLogged: boolean;

  constructor(private requestService: RequestService, private userService: UserService) { }

  ngOnInit() {
    this.isUserLogged = this.userService.isLogged;
  	this.child_variable_gosho = this.requestService.variable_gosho;
  	console.log(this.requestService.variable_gosho);
  	this.test_var = "test changed";
  }

}
