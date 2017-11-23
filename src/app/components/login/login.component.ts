import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
   selector: 'app-login',
   templateUrl: '../../templates/login.component.html'
})
export class LoginComponent {
    constructor(private userService: UserService) {}
}
