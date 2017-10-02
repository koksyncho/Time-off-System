import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-attempt',
  templateUrl: '../../templates/login-attempt.component.html',
  styleUrls: ['./login-attempt.component.css']
})
export class LoginAttemptComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  userIsLogged() {
    return this.userService.isLogged;
  }

}
