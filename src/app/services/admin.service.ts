import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import { Admin } from '../models/admin';
import { URLs } from '../models/URLs';
import { LoginResults, RegisterResults, StatusUpdateResults } from '../models/expectedResponse';
import { UserService } from './user.service';

@Injectable()
export class AdminService 
{
	urls = new URLs();

	constructor(private http: HttpClient, private userService: UserService) {}

	private approveTimeOff(userId: number, timeOffId:number ):string
	{
		let result:string;
		this.http.put<StatusUpdateResults>(this.urls.approveRequestURL+timeOffId.toString, {}).subscribe(
            data => { let result = data.results; });
		return result;
	}

	private disapproveTimeOff(userId: number, timeOffId:number ):string
	{
		let result:string;
		this.http.put<StatusUpdateResults>(this.urls.disapproveRequestURL+timeOffId.toString, {}).subscribe(
            data => { let result = data.results; });
		return result;
	}

	private addNewUser(admin:boolean, name:string, email:string, password:string, egn:string, pto:number)
	{
		this.userService.register(admin, name, email, password, egn, pto);
	}

	private deleteUser(id:number): string
	{
		let result:string;
		this.http.put<StatusUpdateResults>(this.urls.deleteUserURL+id.toString, {}).subscribe(
            data => { let result = data.results; });
		return result;
	}

}