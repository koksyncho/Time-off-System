import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

import { Admin } from '../../models/admin';

@Component({
  selector: 'app-admin',
  templateUrl: '../../templates/admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit 
{


  constructor(private adminService: AdminService) 
  { 
    
  }

  ngOnInit()
  {
  }

  public approveTimeOff(userId:number, timeOffId:number)
  {
    this.adminService.approveTimeOff(userId, timeOffId);

  }

  public disapproveTimeOff(userId:number, timeOffId:number)
  {
    this.adminService.disapproveTimeOff(userId, timeOffId);

  }

  public addNewUser(admin:boolean, name:string, email:string, password:string, egn:number, pto:number)
  {
    this.adminService.addNewUser(admin, name, email, password, egn, pto);
  }

  public deleteUser(id:number)
  {
    this.adminService.deleteUser(id);
  }
}
