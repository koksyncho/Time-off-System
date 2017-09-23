import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: '../../templates/register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  failedToRegister: Boolean;

  constructor(private userService: UserService) {
    this.failedToRegister = false;
  }

  ngOnInit() {}

  public register(username: any, email: any, password: any) {
    this.userService.register(username, email, password);
  }

}
