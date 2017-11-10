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

	constructor(private http: Http, private userService: UserService) {}

	public approveTimeOff(userId: number, timeOffId:number )
	{
		var headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');

		this.http.put(this.urls.approveRequestURL+timeOffId.toString, '' ,{headers:headers});
	}

	public disapproveTimeOff(userId: number, timeOffId:number )
	{
		var headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');

		this.http.put(this.urls.disapproveRequestURL+timeOffId.toString, '' ,{headers:headers});
	}

	public addNewUser(admin:boolean, name:string, email:string, password:string, egn:number, pto:number)
	{
		this.userService.register(admin, name, email, password, egn, pto);
	}

	public deleteUser(id:number)
	{
		var headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');

		this.http.delete(this.urls.deleteUserURL+id.toString, {headers: headers} );
	}

}