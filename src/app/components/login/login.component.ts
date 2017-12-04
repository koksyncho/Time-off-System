import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
   selector: 'app-login',
   templateUrl: '../../templates/login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Component properties
  allUsers: User[];
  statusCode: number;
  requestProcessing = false;
  userIdToUpdate = null;
  processValidation = false;

  isUserLogged: boolean;
  isUserAdmin: boolean;
  loggedInUserID: String;

  // Create form
  userForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  // Create constructor to get service instance
  constructor(private userService: UserService) {}

  // Create ngOnInit() and and load users
  ngOnInit(): void {
    this.getAllUsers();
  }

  // Fetch all users
  getAllUsers() {
    this.userService.getAllUsers().subscribe(
        data => this.allUsers = data,
        errorCode =>  this.statusCode = errorCode
      );
  }

  login(email: string, password: string) {
    console.log("gotcha");
    console.log(email);
    console.log(password);

    this.preProcessConfigurations();

    this.userService.loginUser(email, password)
      .subscribe(user => {
          if (user) {
            console.log("FOUND SOMEONE");
          } else {
            console.log("DIDN'T FIND ANYONE");
          }
          console.log(user);
          console.log(user.userId);
          console.log(user.email);
          console.log(user.password);
          console.log(email + " " + password);
          console.log("do we reach here");
          this.loggedInUserID = user.userId;
          this.userService.loggedUserID = user.userId;
          if (user.userId == "-1") {
            this.isUserLogged = false;
            this.userService.isLogged = false;
            this.isUserAdmin = false;
            this.userService.isAdmin = false;
          } else {
            this.isUserLogged = true;
            this.userService.isLogged = true;
            this.userService.loggedUserID = user.userId;
            if (user.userId == "1") {
              this.isUserAdmin = true;
              this.userService.isAdmin = true;
            } else {
              this.isUserAdmin = false;
              this.userService.isAdmin = false;
            }
          }
      this.processValidation = true;
      this.requestProcessing = false;
    }, errorCode =>  this.statusCode = errorCode);
  }

  // Load user by id to edit
  loadUserToEdit(userId: string) {
    this.preProcessConfigurations();

    this.userService.getUserById(userId)
      .subscribe(user => {
        console.log(user);
          this.userIdToUpdate = user.userId;
          this.userForm.setValue({ email: user.email, password: user.password });
          console.log("Selected user ID:" + this.userIdToUpdate);
      this.processValidation = true;
      this.requestProcessing = false;
    }, errorCode =>  this.statusCode = errorCode);
  }

  // Perform preliminary processing configurations
  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }
}
