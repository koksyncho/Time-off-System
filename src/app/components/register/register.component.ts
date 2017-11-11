import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: '../../templates/register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {username: null, email: null, password: null};

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  public register(admin:boolean, name:string, email:string, password:string, egn:number, pto:number) {
    this.userService.register(admin, name, email, password, egn, pto); 
  }

}
