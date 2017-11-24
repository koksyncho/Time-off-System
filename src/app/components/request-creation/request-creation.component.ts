import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-request-creation',
  templateUrl: '../../templates/request-creation.component.html',
  styleUrls: ['./request-creation.component.css']
})
export class RequestCreationComponent implements OnInit {
  
  constructor(
  	private router:Router,
    private userService: UserService,
    private calService: CalendarService
  ) {}

  ngOnInit() {}

}
