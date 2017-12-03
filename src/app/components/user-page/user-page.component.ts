import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-user-page',
  templateUrl: '../../templates/user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
 
  // Component properties
  allUsers: User[];
  statusCode: number;
  requestProcessing = false;
  userIdToUpdate = null;
  processValidation = false;

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

    this.processValidation = true;

    if (this.userForm.invalid) {
      return; // Validation failed, exit from method.
    }

    this.preProcessConfigurations();

    this.userService.loginUser(email, password);/*
      .subscribe(successCode => {
        this.statusCode = successCode;
    }, errorCode => this.statusCode = errorCode);*/
   
  }

  // Perform preliminary processing configurations
  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }
}
