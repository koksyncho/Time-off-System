import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: '../../templates/requests.component.html',
  styleUrls: ['../../styles/requests.component.css']
})
export class RequestsComponent implements OnInit
{
  pto:number; //Paid Time Off (available)
  index:number; //total number of requests

  constructor(private router:Router)
  {
    this.pto = 15; //only for testing... *to be removed*
    this.index = 12; //only for testing... *to be removed*
  }

  ngOnInit() {
  }

}
