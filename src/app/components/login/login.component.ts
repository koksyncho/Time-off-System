import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: '../../templates/login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  failedToLogin: Boolean;

  constructor(private userService: UserService) {
    this.failedToLogin = false;
  }

  ngOnInit() {}

  public login(email: any, password: any) {
    this.userService.login(email, password)
    .then(isLogged => this.failedToLogin = !isLogged);
  }

}
