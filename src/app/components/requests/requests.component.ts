import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Request } from '../../models/request'

@Component({
  selector: 'app-requests',
  templateUrl: '../../templates/requests.component.html',
  styleUrls: ['../../styles/requests.component.css']
})
export class RequestsComponent implements OnInit
{
  requests:Request[];
  pto:number; //Paid Time Off (available)
  admin:boolean; //if the user is an admin or not

  constructor(private router:Router)
  {
    this.admin = true; //only for testing... *to be removed*
    this.pto = 15; //only for testing... *to be removed*
    this.requests = [
      {"id":"1", "owner":"Teo", "type":"PTO", "days":"1", "dates":"5 September 2016", "submit":"2016-08-10 18:20:31", "status":"approved"},
      {"id":"2", "owner":"Tito", "type":"PTO", "days":"8", "dates":"29-31 August, 1-2, 7-9 September 2016", "submit":"2016-06-09 18:32:48", "status":"approved"},
      {"id":"3", "owner":"Lili", "type":"PTO", "days":"3", "dates":"27-29 June 2016", "submit":"2016-06-09 18:29:54", "status":"approved"},
      {"id":"4", "owner":"...", "type":"...", "days":"...", "dates":"...", "submit":"...", "status":"..."},
      {"id":"5", "owner":"...", "type":"...", "days":"...", "dates":"...", "submit":"...", "status":"..."},
      {"id":"6", "owner":"...", "type":"...", "days":"...", "dates":"...", "submit":"...", "status":"..."},
      {"id":"7", "owner":"...", "type":"...", "days":"...", "dates":"...", "submit":"...", "status":"..."}
    ]; //this data will be coming from the server... this here is only for testing *to be removed*
  }

  ngOnInit() {
  }

}
