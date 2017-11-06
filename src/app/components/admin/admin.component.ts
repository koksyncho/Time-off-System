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

	adminUser:Admin = Admin.getInstance();


  constructor(private adminService: AdminService) 
  { 
    
  }

  ngOnInit()
  {
  }

}
