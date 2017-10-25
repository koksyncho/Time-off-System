import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';
import { Admin } from '../models/admin';

@Injectable()
export class AdminService 
{

	private approveTimeOff(userId: number, timeOffId:number )
	{
		// here we say to the database "Time off is approved"
	}

	private disapproveTimeOff(userId: number, timeOffId:number )
	{
		// here we say to the database "Time off is DISapproved"
	}

	private addNewUser(username: string, pass:string, email:string)
	{
		//only the admin is able to create users!!!!
	}

	private deleteUser(id:number)
	{
		//only the admin is able to delete users!!!!
	}

	private deleteAllUsers()
	{
		//first a message "Are u shure?"
		//then delete all users
	}

}