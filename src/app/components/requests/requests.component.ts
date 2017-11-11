import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { RequestService } from '../../services/request.service';

import { Router } from '@angular/router';

import { Request } from '../../models/request';
import { User } from '../../models/user';

@Component({
  selector: 'app-requests',
  templateUrl: '../../templates/requests.component.html',
  styleUrls: ['../../styles/requests.component.css'],
  providers: [
    { provide: 'Window',  useValue: window }
  ]
})
export class RequestsComponent implements OnInit
{
  user:User;

  private requests:Array<Request>;

  pto:number; //Paid Time Off (available)
  admin:boolean; //if the user is an admin or not

  constructor(
    @Inject('Window') private window: Window,
    private router:Router,
    private userService: UserService,
    private requestService: RequestService)
  {
    this.user = userService.getCurrentUser()
    this.admin = this.user.admin; //only for testing... *to be removed*
    this.pto = this.user.pto; //only for testing... *to be removed*
    this.getAllRequests();


  }

  ngOnInit() {
  }

  private getAllRequests()
  {
    this.requestService.getAllRequests().subscribe(
        requests => {
          if(requests.length!=0)
          {
            this.requests = requests;
          }
        }
      );

  }

  private getRequestById(id:number):Request
  {
    return this.requests[id];
  }
}
