import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Request } from '../../models/request';
import { CalendarService } from '../../services/calendar.service';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-request-creation',
  templateUrl: '../../templates/request-creation.component.html',
  styleUrls: ['./request-creation.component.css']
})
export class RequestCreationComponent implements OnInit {
  
  requestType: string;
  
  requestOptions: Array<Object> = [
      {type: 'PTO1', name: "10 days after today"},
      {type: 'PTO2', name: "10 days before today"}
  ];

  reason: string;
  note:string;

  constructor(
  	private router:Router,
    private userService: UserService,
    private calService: CalendarService,
    private requestService: RequestService
  ) {}

  ngOnInit() {}

  createRequest() {
    let events: Array<any> = this.calService.events;
    let days: string = events.length - 1 + '';
    let dates: string;

    for (let i = 0; i < events.length; i++) {
      dates += events[i].start + '; ';
    }

    this.requestService.createRequest(
      this.userService.currentUsername, 
      this.requestType, 
      days, 
      dates, 
      this.reason,
      this.note, 
      this.calService.viewDate.toDateString(), 
      'Not Approved'
    );
  }

}
