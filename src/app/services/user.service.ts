import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from '../models/user';
import { URLs } from '../models/URLs';
import { LoginResults, RegisterResults, idRequestResults, userRequestResult } from '../models/expectedResponse';

@Injectable()
export class UserService {
    
    urls = new URLs();
    private userIn:User;
    private users:Array<User>;
    private canLogIn:string;

    constructor(private http: Http) {
    }

    login(username: string, password: string){
        let bodyOfRequest = 'name='+username+'&password='+password;

        var headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');

        let resultsOfLogin:string;

        this.http.post(this.urls.loginURL, bodyOfRequest, {headers: headers})
                        .map(this.extractData)
                        .map((canLogIn:string) =>
                        {
                            let result:boolean;
                            if(canLogIn.length!=0)
                            {
                                if(canLogIn==="login successfull")
                                {
                                    result = true;
                                }

                                return result;
                            }
                        
                        }).subscribe(
                            result => {
                                if(result)
                                {
                                    this.rememberUser(username);
                                }
                            }
      );
        
    }


    register(admin:boolean, name:string, email:string, password:string, egn:number, pto:number)
    {
        var userToAdd = new User(admin,name,email,password,egn,pto);

        let body = JSON.stringify(userToAdd);

        var headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');

        return this.http.post(this.urls.registerURL, body, {headers:headers})
                    .map(this.extractData)
                    .map((errors:Map<String, Set<String>>) =>
                        {
                            let result:boolean;
                            if(!errors)
                            {
                               return false;
                            }else{
                                return true;
                            }
                        
                        });
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
        var id:number;

        var headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');

        this.http.post(this.urls.getIDbyUsernameURL+username, '', {headers: headers})
                    .map(this.extractData)
                    .map((id:number) =>
                        {
                            if(id!=null)
                            {
                               return id;
                            }
                        });

        let user:User;

        var headersForGettingTheUser = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');

        this.http.post(this.urls.getUserByIDURL+id, {})
                    .map(this.extractData)
                    .map((user:User) =>
                        {
                            if(user!=null)
                            {
                               return user;
                            }
                        }).subscribe(
                            user => {
                              if(user!=null)
                              {
                                  this.userIn = user;
                              }
                        }
      );

        this.setCurrentUser(user);
    }

    private extractData(response:Response)
    {
        let body = response.json();
        return body;
    }
}
