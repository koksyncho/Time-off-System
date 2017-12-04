import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

import { RequestService } from '../../services/request.service';
import { CalendarService } from '../../services/calendar.service';
import { Request } from '../../models/request';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-requests-page',
  templateUrl: '../../templates/requests-page.component.html',
  styleUrls: ['./requests-page.component.css']
})
export class RequestsPageComponent implements OnInit {

  // Component properties
  allRequests: Request[];
  statusCode: number;
  requestProcessing = false;
  requestIdToUpdate = null;
  processValidation = false;
  requestCount: number = 0;

  requestType: string;
  requestOptions: Array<Object> = [
      {type: 'PTO1', name: "10 days after today"},
      {type: 'PTO2', name: "10 days before today"}
  ];

  isUserLogged: boolean;
  isUserAdmin: boolean;

  // Create form
  requestForm = new FormGroup({
    dates: new FormControl('', Validators.required),
    days: new FormControl('', Validators.required),
    note: new FormControl('', Validators.required),
    reason: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    user_id: new FormControl('', Validators.required)
  });

  // Create constructor to get service instance
  constructor(private requestService: RequestService, private calService: CalendarService, private userService: UserService) {}

  // Create ngOnInit() and and load users
  ngOnInit(): void {
    this.getAllRequests();
    this.isUserAdmin = this.userService.isAdmin;
    this.isUserLogged = this.userService.isLogged;
  }

  // Fetch all users
  getAllRequests() {
    this.requestService.getAllRequests().subscribe(
        data => this.allRequests = data,
        errorCode =>  this.statusCode = errorCode
      );
  }

  // Handle create and update user
  onRequestFormSubmit() {
    this.processValidation = true;

    if (this.requestForm.invalid) {
          return; // Validation failed, exit from method.
    }

    // Form is valid, now perform create or update
    this.preProcessConfigurations();

    let dates = this.requestForm.get('dates').value.trim();
    let days = this.requestForm.get('days').value.trim();
    let type = this.requestForm.get('type').value.trim();
    let status = "Pending";
    let note = this.requestForm.get('note').value.trim();
    let reason = this.requestForm.get('reason').value.trim();
    let user_id = this.requestForm.get('user_id').value.trim();
    let submit_time = "current_time";
    
    if (this.requestIdToUpdate === null) {
      // Handle create request
      let request = new Request(null, dates, days, note, reason, status, submit_time, type/*this.requestType*/, user_id);

      this.requestService.createRequest(request)
        .subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllRequests();
          this.backToCreateRequest();
      }, errorCode => this.statusCode = errorCode);
    } else {
      // Handle update request
      console.log("days=" + days);
      let request = new Request(this.requestIdToUpdate, dates, days, note, reason, status, submit_time, type/*this.requestType*/, user_id);

      this.requestService.updateRequest(request)
        .subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllRequests();
          this.backToCreateRequest();
      }, errorCode => this.statusCode = errorCode);
    }
  }

  // Load request by id to edit
  loadRequestToEdit(id: string) {
    this.preProcessConfigurations();

    this.requestService.getRequestById(id)
      .subscribe(request => {
          this.requestIdToUpdate = request.id;
          //we don't include the user_id because it should be a constant 
          //we don't include the status and submit_time as well
          //probably the only thing that should be changeable here is the STATUS (by the admin) though
          this.requestForm.setValue({ dates: request.dates, days: request.days, note: request.note, reason: request.reason, type: request.type });
          //THE days seem to not be changeable
      this.processValidation = true;
      this.requestProcessing = false;
    }, errorCode =>  this.statusCode = errorCode);
  }

  // Delete request
  deleteRequest(id: string) {
    this.preProcessConfigurations();

    this.requestService.deleteRequestById(id)
      .subscribe(successCode => {
        this.statusCode = successCode;
        this.getAllRequests();
        this.backToCreateRequest();
      }, errorCode => this.statusCode = errorCode);
  }

  // Approve request
  approveRequest(id: string, user_id: string, type: string, days: string, dates: string, submit_time: string, status: string, note: string, reason: string) {
    this.preProcessConfigurations();

    let request = new Request(id, dates, days, note, reason, status, submit_time, type/*this.requestType*/, user_id);

    this.requestService.approveRequestById(request)
      .subscribe(successCode => {
        this.statusCode = successCode;
        this.getAllRequests();
        this.backToCreateRequest();
      }, errorCode => this.statusCode = errorCode);
  }

  // Open request's request page
  openRequest(id: string) {
    this.preProcessConfigurations();

    this.requestService.openRequestById(id)
      /*.subscribe(successCode => {
        this.statusCode = successCode;
        this.getAllRequests();
        this.backToCreateRequest();
      }, errorCode => this.statusCode = errorCode)*/;
  }

  // Perform preliminary processing configurations
  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }
  // Go back from update to create
  backToCreateRequest() {
    this.requestIdToUpdate = null;
    this.requestForm.reset();
    this.processValidation = false;
  }

  // when the type is changed (pto1 -> pto2)
  onChange(newType) {
    this.calService.requestType = newType;
    this.calService.reset();
    console.log("events emptied");
  }

}
