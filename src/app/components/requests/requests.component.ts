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
      {"owner":"Teo", "type":"PTO", "days":"1", "dates":"5 September 2016", "submit":"2016-08-10 18:20:31", "status":"approved"},
      {"owner":"Tito", "type":"PTO", "days":"8", "dates":"29-31 August, 1-2, 7-9 September 2016", "submit":"2016-06-09 18:32:48", "status":"approved"},
      {"owner":"Lili", "type":"PTO", "days":"3", "dates":"27-29 June 2016", "submit":"2016-06-09 18:29:54", "status":"approved"},
      {"owner":"...", "type":"...", "days":"...", "dates":"...", "submit":"...", "status":"..."},
      {"owner":"...", "type":"...", "days":"...", "dates":"...", "submit":"...", "status":"..."},
      {"owner":"...", "type":"...", "days":"...", "dates":"...", "submit":"...", "status":"..."},
      {"owner":"...", "type":"...", "days":"...", "dates":"...", "submit":"...", "status":"..."}
    ]; //this data will be coming from the server... this here is only for testing *to be removed*
  }

  ngOnInit() {
  }

}
