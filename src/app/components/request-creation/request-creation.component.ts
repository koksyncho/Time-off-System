import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
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

  recieverEmail = "kaloyan_mk@abv.bg";//"wibo0126@gmail.com";

  currentUserId: string;
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
    days: new FormControl('', Validators.required),
    note: new FormControl('', Validators.required),
    reason: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    user_id: new FormControl('', Validators.required)
  });

  // Create constructor to get service instance
  constructor(private userService: UserService, private requestService: RequestService, private calService: CalendarService) {}

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

  //EMAIL PART
  dates: string;
  days: string;
  note: string;
  reason: string;
  emailReceiver: string;

  initDatesAndDays() {
    let events = this.calService.events;
    let dates: string;

    for (let i = 0; i < events.length; i++) {
      dates += events[i].start.toDateString() + ";";
      console.log(events[i].start.toDateString());
    }

    this.dates = dates;
  }

  sentEmail() {
    //EMAIL
    this.initDatesAndDays();

    //SEND EMAIL
    this.requestService.sendEmail(
    this.emailReceiver/*this.recieverEmail*/, 
    this.requestType + " for User with ID:" + this.userService.loggedUserID,/*" by Name of Person Placeholder",*/ 
    "Request for " + this.emailReceiver/*this.requestType*/ + 
      " for the dates:" + this.dates.slice(9, this.dates.length) + 
      "\n Reason: \n" + this.reason).subscribe();
    //SEND EMAIL
  }
  //EMAIL PART



  // Handle create and update user
  onRequestFormSubmit() {
    this.processValidation = true;

    //if (this.requestForm.invalid) {
      //return; // Validation failed, exit from method.
    //}

    // Form is valid, now perform create or update
    this.preProcessConfigurations();

    /*let dates = this.requestForm.get('dates').value.trim();
    let days = this.requestForm.get('days').value.trim();
    let type = this.requestForm.get('type').value.trim();
    */let status = "Pending";
    /*let note = this.requestForm.get('note').value.trim();
    let reason = this.requestForm.get('reason').value.trim();
    let user_id = this.requestForm.get('user_id').value.trim();
    */let submit_time = "current_time";
    
    //if (this.requestIdToUpdate === null) {
      // Handle create request

      //CALENDAR
      let events = this.calService.events;
      let datesCalendar: string;
      let daysCalendar: number;

      daysCalendar = 0;

      for (let i = 0; i < events.length; i++) {
        datesCalendar += events[i].start.toDateString() + ";";
        daysCalendar++;
        console.log(events[i].start.toDateString());
      }

      datesCalendar = datesCalendar.slice(9, datesCalendar.length);

      this.dates = datesCalendar;
      //CALENDAR
      this.currentUserId = this.userService.loggedUserID;
      console.log("is this the current user id: " + this.currentUserId);

      let request = new Request(null, datesCalendar/*dates*/, daysCalendar.toString()/*days*/, this.note/*note*/, this.reason/*reason*/, status, submit_time, this.requestType/*type*//*this.requestType*/, this.currentUserId/*user_id*/);

      this.requestService.createRequest(request)
        .subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllRequests();
          this.backToCreateRequest();
      }, errorCode => this.statusCode = errorCode);

      //send email
      this.sentEmail();  
    //} //else {
      // Handle update request
      //let request = new Request(this.requestIdToUpdate, dates, days, note, reason, status, submit_time, type/*this.requestType*/, user_id);

      /*this.requestService.updateRequest(request)
        .subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllRequests();
          this.backToCreateRequest();
      }, errorCode => this.statusCode = errorCode);
    }*/
  }

  // Load request by id to edit
  /*loadRequestToEdit(id: string) {
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
  }*/

  // Delete request
  /*deleteRequest(id: string) {
    this.preProcessConfigurations();

    this.requestService.deleteRequestById(id)
      .subscribe(successCode => {
        this.statusCode = successCode;
        this.getAllRequests();
        this.backToCreateRequest();
      }, errorCode => this.statusCode = errorCode);
  }*/

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
