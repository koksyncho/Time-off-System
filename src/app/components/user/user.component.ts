import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
   selector: 'app-user',
   templateUrl: '../../templates/user.component.html',
   styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

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

  // Handle create and update user
  onUserFormSubmit() {
    this.processValidation = true;

    if (this.userForm.invalid) {
          return; // Validation failed, exit from method.
    }

    // Form is valid, now perform create or update
    this.preProcessConfigurations();

    let email = this.userForm.get('email').value.trim();
    let password = this.userForm.get('password').value.trim();

    if (this.userIdToUpdate === null) {
      // Handle create user
      let user = new User(null, email, password);

      this.userService.createUser(user)
        .subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllUsers();
          this.backToCreateUser();
      }, errorCode => this.statusCode = errorCode);
    } else {
      // Handle update user
      let user = new User(this.userIdToUpdate, email, password);

      this.userService.updateUser(user)
        .subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllUsers();
          this.backToCreateUser();
      }, errorCode => this.statusCode = errorCode);
    }
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

  // Delete user
  deleteUser(userId: string) {
    this.preProcessConfigurations();

    this.userService.deleteUserById(userId)
      .subscribe(successCode => {
        this.statusCode = successCode;
        this.getAllUsers();
        this.backToCreateUser();
      }, errorCode => this.statusCode = errorCode);
  }

  // Perform preliminary processing configurations
  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }
  // Go back from update to create
  backToCreateUser() {
    this.userIdToUpdate = null;
    this.userForm.reset();
    this.processValidation = false;
  }

}
