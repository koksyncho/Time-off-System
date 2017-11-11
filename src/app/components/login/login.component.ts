import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: '../../templates/login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {username: null, email: null, password: null};

  constructor(private userService: UserService) {}

  ngOnInit() {}

  public login(email: any, password: any) {
    this.userService.login(email, password);
  }

  public logOut(userForm: any) {
    this.userService.rememberUser(null);
    userForm.resetForm({});
  }

}
