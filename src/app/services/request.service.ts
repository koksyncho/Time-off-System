import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { Request } from '../models/request';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class RequestService {
    variable_gosho: string;
    opened_request_id: string;

    // URLs for CRUD operations
    allRequestsUrl = 'http://localhost:8080/request/all-requests';
	requestUrl = 'http://localhost:8080/request/request';
    requestStatusChangeUrl = 'http://localhost:8080/request/request';
    emailUrl = 'http://localhost:8080/user/send-email';
  

	isLogged: boolean;
	isAdmin: boolean;

    // Create constructor to get Http instance
	constructor(private http: Http) {}
	
	login() {
        console.log("is it here");
		this.isLogged = true;
		this.isAdmin = true;
	}

    sendEmail(recieverAddress, subject, body): Observable<Request[]> {
        return this.http.get(this.emailUrl + "?email=" + recieverAddress + "&subject=" + subject + "&body=" + body)
            .map(this.extractData)
            .catch(this.handleError);
    }


    // Fetch all requests
    getAllRequests(): Observable<Request[]> {
        return this.http.get(this.allRequestsUrl).map(this.extractData).catch(this.handleError);
    }

    // Create request
    createRequest(request: Request): Observable<number> {
        this.variable_gosho = "this is gosho";
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });

        return this.http.post(this.requestUrl, request, options)
            .map(success => success.status)
            .catch(this.handleError);
    }

    // Fetch request by id
    getRequestById(id: string): Observable<Request> {

        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let cpParams = new URLSearchParams();

        cpParams.set('id', id);

        let options = new RequestOptions({ headers: cpHeaders, params: cpParams });

        return this.http.get(this.requestUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    // Update request
    updateRequest(request: Request): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });

        console.log("DAYS: " + request.days);

        return this.http.put(this.requestUrl, request, options)
            .map(success => success.status)
            .catch(this.handleError);
    }

    // Approve request
    approveRequestById(request: Request): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });


        return this.http.put(this.requestStatusChangeUrl, request, options)
            .map(success => success.status)
            .catch(this.handleError);
    }

    // Delete request
    deleteRequestById(id: string): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let cpParams = new URLSearchParams();

        cpParams.set('id', id);

        let options = new RequestOptions({ headers: cpHeaders, params: cpParams });

        return this.http.delete(this.requestUrl, options)
            .map(success => success.status)
            .catch(this.handleError);
    }



    // Open request
    openRequestById(id: string)/*: Observable<number>*/ {
        this.opened_request_id = id;

        /*let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let cpParams = new URLSearchParams();

        cpParams.set('id', id);

        let options = new RequestOptions({ headers: cpHeaders, params: cpParams });

        return this.http.delete(this.requestUrl, options)
            .map(success => success.status)
            .catch(this.handleError);*/
    }

    private extractData(res: Response) {
        return res.json();
    }

    private handleError (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }
}
