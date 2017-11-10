import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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
	requests:Array<Request>;

	constructor(private http: Http) {
		this.requests = new Array<Request>();
	}

	public getAllRequests():Observable<Request[]>
	{
		var body = '';
		var headers = new Headers();
		headers.append('Content-type', 'application/x-www-form-urlencoded');

		return this.http.get(this.urls.getAllRequestURL, {headers: headers})
					.map(this.extractData)
					.map((requests: Array<Request>) =>
						{
							let result:Array<Request> = [];
							if(requests)
							{
								requests.forEach((request) =>
									{
										result.push(request);
									});

								return result;
							}
						
						});
		
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
        )
	{
		var request = new Request(id, owner, type, days, dates,reason, note, submit, status);

		let body = JSON.stringify(request);

		var headers = new Headers();
		headers.append('Content-type', 'application/x-www-form-urlencoded');
			

		this.http.put(this.urls.updateRequestURL, body, {headers: headers});


	}

	public deleteRequest(id:number)
	{

		var headers = new Headers();
		headers.append('Content-type', 'application/x-www-form-urlencoded');

		this.http.delete(this.urls.deleteRequestURL+id.toString, );
	}

	private extractData(response:Response)
	{
		let body = response.json();
		return body;
	}

}
