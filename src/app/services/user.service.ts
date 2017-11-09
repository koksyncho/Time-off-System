import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import { URLs } from '../models/URLs';
import { LoginResults, RegisterResults, idRequestResults, userRequestResult } from '../models/expectedResponse';

@Injectable()
export class UserService {
    
    urls = new URLs();
    private userIn:User;

    constructor(private http: HttpClient) {
    }

    login(username: string, password: string): boolean {
        let bodyOfRequest = {
            "name": username,
            "password": password
        };
        let resultsOfLogin:string;

        this.http.post<LoginResults>(this.urls.loginURL, bodyOfRequest).subscribe(
            data => { resultsOfLogin = data.results; });

        if(resultsOfLogin === "login successfull")
        {
            
            this.rememberUser(username);

            return true;
        }else{
            return false;
        }
        
    }


    //this method returns false if it cannot create the user
    register(admin:boolean, name:string, email:string, password:string, egn:string, pto:number):boolean
    {
        let body = {
            "admin": admin,
            "name": name,
            "email": email,
            "password": password,
            "egn": egn,
            "pto": pto
        }
        let result:string;
        this.http.post<RegisterResults>(this.urls.registerURL, body).subscribe(
            data => { result = data.results; });
        if(result.length===0)
        {
            return true;
        }else{
            return false;

        }
    }

    public setCurrentUser(user:User)
    {
        this.userIn = user;
    }

    public getCurrentUser():User
    {
        return this.userIn;
    }

    public rememberUser(username:string)
    {
        let id:number;
        this.http.post<idRequestResults>(this.urls.getIDbyUsernameURL+username, {}).subscribe(
            data => { id = data.results; });

        let user:User;
        this.http.post<userRequestResult>(this.urls.getUserByIDURL+id, {}).subscribe(
            data => { user = data.results; });

        this.setCurrentUser(user);
    }
}
