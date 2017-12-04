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
    userLoginUrl = 'http://localhost:8080/user/login';
    userEmailUrl = 'http://localhost:8080/user/user-email';

	isLogged: boolean;
	isAdmin: boolean;
    loggedUserID: string;

    // Create constructor to get Http instance
	constructor(private http: Http) {}
	
	login() {
        console.log("is it here");
		this.isLogged = true;
		this.isAdmin = true;
	}

    logout() {
        console.log("is it here");
        this.isLogged = null;
        this.isAdmin = null;
        this.loggedUserID = null;
    }

    // Login user
    loginUser(email: string, password: string): Observable<User/*boolean*/> {
        /*var result = this.http.get(this.userLoginUrl).map(this.extractData).catch(this.handleError);
        console.log(result);
        //how to properly parse the result into boolean
        if (result) {
            console.log("yay");
        } else {
            console.log("nay");
        }
        return this.http.get(this.userLoginUrl).map(this.extractData).catch(this.handleError);*/
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let cpParams = new URLSearchParams();

        cpParams.set('email', email);
        console.log(cpParams);
        cpParams.set('password', password);
        console.log(cpParams);

        let options = new RequestOptions({ headers: cpHeaders, params: cpParams });

        return this.http.get(this.userLoginUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
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

        console.log(cpParams);

        let options = new RequestOptions({ headers: cpHeaders, params: cpParams });

        return this.http.get(this.userUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    // Fetch user by email
    getUserByEmail(email: string): Observable<User> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let cpParams = new URLSearchParams();

        cpParams.set('email', email);

        let options = new RequestOptions({ headers: cpHeaders, params: cpParams });

        return this.http.get(this.userEmailUrl, options)
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
