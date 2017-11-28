import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RequestService } from '../../services/request.service';
import { CalendarService } from '../../services/calendar.service';
import { Request } from '../../models/request';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-request-creation',
  templateUrl: '../../templates/request-creation.component.html',
  styleUrls: ['./request-creation.component.css']
})
export class RequestCreationComponent implements OnInit {

  recieverEmail = "wibo0126@gmail.com";
  
  // Component properties
  allRequests: Request[];
  statusCode: number;
  requestProcessing = false;
  requestIdToUpdate = null;
  processValidation = false;

  requestType: string;
  requestOptions: Array<Object> = [
      {type: 'PTO1', name: "10 days after today"},
      {type: 'PTO2', name: "10 days before today"}
  ];

  // Create form
  requestForm = new FormGroup({
    dates: new FormControl('', Validators.required),
    days: new FormControl('', Validators.required)
  });

  // Create constructor to get service instance
  constructor(private requestService: RequestService, private calService: CalendarService) {}

  // Create ngOnInit() and and load users
  ngOnInit(): void {
    this.getAllRequests();
  }

  // Fetch all users
  getAllRequests() {
    this.requestService.getAllRequests().subscribe(
        data => this.allRequests = data,
        errorCode =>  this.statusCode = errorCode
      );
  }

  dates: string;
  days: string;
  note: string;
  reason: string;

  initDatesAndDays() {
    let events = this.calService.events;
    let dates: string;

    for (let i = 0; i < events.length; i++) {
      dates += events[i].start.toDateString() + "; ";
      console.log(events[i].start.toDateString());
    }

    this.dates = dates;
  }

  // Handle create and update user
  onRequestFormSubmit() {
    this.initDatesAndDays();

    console.log("in onRequestFormSubmit()");
    this.processValidation = true;

    // if (this.requestForm.invalid) {
    //       return; // Validation failed, exit from method.
    // }

    // Form is valid, now perform create or update
    this.preProcessConfigurations();

    console.log("requestidtoupdate = " + this.requestIdToUpdate);
    if (this.requestIdToUpdate === null) {
      console.log("in handle create request if")

      // Handle create request
      let request = new Request(null, this.dates, this.days, this.note, this.reason, "unapproved", "what dis", this.requestType, "4");

      this.requestService.createRequest(request)
        .subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllRequests();
          this.backToCreateRequest();
      }, errorCode => this.statusCode = errorCode);

      this.requestService.sendEmail(
        this.recieverEmail, 
        this.requestType + " for Name of Person Placeholder", 
        "Request for " + this.requestType + 
          " for name of person placeholder for the dates:" + this.dates + 
          "\n Reason: \n" + this.reason).subscribe();
    } else {
      // Handle update request
      let request = new Request(null, this.dates, this.days, this.note, this.reason, "unapproved", "what dis", this.requestType, "4");

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
          this.requestForm.setValue({ dates: request.dates, days: request.days });

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

  onChange(newType) {
    this.calService.requestType = newType;
    this.calService.reset();
    console.log("events emptied");
  }

}
