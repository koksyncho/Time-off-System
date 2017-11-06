/*import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { 
	AllRequestsIterable, 
	UpdateRequestResults, 
	DeleteRequestResults 
	} from '../models/expectedResponse';
import { URLs } from '../models/URLs';
import { Request } from '../models/request';

@Injectable()
export class RequestService 
{
	urls = new URLs();

	constructor(private http: HttpClient) {}

	public getAllRequests():Iterable<Request>
	{
		let result:Iterable<Request>;
		this.http.get<AllRequestsIterable>(this.urls.getAllRequestURL, {}).subscribe(
            data => { let result = data.results; });

		return result;
	}

	public updateRequest(    	
		id: string,
    	owner: string,
        type: string,
        days: string,
        dates: string,
        reason: string,
        note: string,
        submit: string,
        status: string
        ):string
	{
		let result:Map<String, Set<String>>;

		let body = {
			"request": new Request(id, owner, type, days, dates,reason, note, submit, status),
		}

		this.http.put<UpdateRequestResults>(this.urls.getAllRequestURL, body).subscribe(
            data => { let result = data.results; });
		if(result===null)
		{
			return "Successfully saved"
		}else{
			return "Not saved";
		}

	}

	public deleteRequest(id:number):string
	{
		let result:string;
		this.http.delete<DeleteRequestResults>(this.urls.deleteRequestURL+id.toString, {}).subscribe(
            data => { let result = data.results; });
		return result;
	}

}*/