import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class UserService {

    // URLs for CRUD operations
    allUsersUrl = 'http://localhost:8080/user/all-users';
	userUrl = 'http://localhost:8080/user/user';

	isLogged: boolean;
	isAdmin: boolean;

    // Create constructor to get Http instance
	constructor(private http: Http) {}
	
	login() {
		this.isLogged = true;
		this.isAdmin = true;
	}

    // Fetch all users
    getAllUsers(): Observable<User[]> {
        return this.http.get(this.allUsersUrl).map(this.extractData).catch(this.handleError);

    }

    // Create user
    createUser(user: User): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });

        return this.http.post(this.userUrl, user, options)
            .map(success => success.status)
            .catch(this.handleError);
    }

    // Fetch user by id
    getUserById(userId: string): Observable<User> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let cpParams = new URLSearchParams();

        cpParams.set('id', userId);

        let options = new RequestOptions({ headers: cpHeaders, params: cpParams });

        return this.http.get(this.userUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    // Update user
    updateUser(user: User): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });

        return this.http.put(this.userUrl, user, options)
            .map(success => success.status)
            .catch(this.handleError);
    }

    // Delete user
    deleteUserById(userId: string): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let cpParams = new URLSearchParams();

        cpParams.set('id', userId);

        let options = new RequestOptions({ headers: cpHeaders, params: cpParams });

        return this.http.delete(this.userUrl, options)
            .map(success => success.status)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        return res.json();
    }

    private handleError (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }
}
