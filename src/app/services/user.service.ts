import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

@Injectable()
export class UserService {

    users: User[];

    public isLogged: boolean;
    public pageName: string;
    public currentUsername: string;
    public registerMessage: any;
    public loginMessage: any;

    constructor() {
        this.users = new Array<User>();
        this.initLocalStorage();
        this.isLogged = false;
        this.registerMessage = '';
        this.loginMessage = '';
    }

    private initLocalStorage() {
        this.users = JSON.parse(localStorage.getItem('storage'));

        if (localStorage.getItem('storage') === null) {
            this.users = [{'username': 'Test', 'email': 'Test', 'password': 'test'}];
        } else if (this.users.length === 0) {
            this.users = [{'username': 'Test', 'email': 'Test', 'password': 'test'}];
        }
    }

    login(email: string, password: string) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.credentialsAreCorrect(i, email, password)) {
                this.isLogged = true;
                this.currentUsername = this.users[i].email;
                this.loginMessage = 'Login Successful';
                break;
            } else {
                this.isLogged = false;
                this.loginMessage = 'Login Failed: Wrong email or password;';
            }
        }
    }

    private credentialsAreCorrect(i: any, email: any, password: any): boolean {
        return this.users[i].email === email && this.users[i].password === password;
    }

    logOut() {
        this.isLogged = false;
    }

    register(username: string, email: string, password: string) {
        if (!this.registrationFailed(username, email)) {
            this.createNewUser(username, email, password);

            this.registerMessage = 'Registration Successful';
        }
    }

    private registrationFailed(username: string, email: string): boolean {
        let regFailed = false;

        let firstMessageShown = false;
        let secondMessageShown = false;
        let thirdMessageShown = false;

        this.registerMessage = 'Registration Failed: \n';

        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].username === username && !firstMessageShown) {
                this.registerMessage += 'Username already taken. \n';
                regFailed = true;
                firstMessageShown = true;
            }

            if (this.users[i].email === email && !secondMessageShown) {
                this.registerMessage += 'Email already taken. \n';
                regFailed = true;
                secondMessageShown = true;
            }

            if (!this.emailFormIsCorrect(email) && !thirdMessageShown) {
                this.registerMessage += 'The submitted email is not in the correct format (name@provider.domain). \n';
                regFailed = true;
                thirdMessageShown = true;
            }
        }

        if (regFailed) {
            return true;
        }
        return false;
    }

    private emailFormIsCorrect(email: string) {
        let atExists = false;

        for (let i = 0; i < email.length; i++) {
            if (email[i] === '@') {
                atExists = true;
            }

            if (atExists && email[i] === '.') {
                return true;
            }
        }

        return false;
    }

    private createNewUser(username: any, email: any, password: any) {
        const user = new User(username, email, password);
        this.users.push(user);

        // Your editor might mark this guy with a red wavey line at the bottom:
        let users;
        // don't touch him, though. He's perfect.

        this.addObjectToLocalStorage(users, user);
    }

    private addObjectToLocalStorage(objects: any, object: any) {
        if (localStorage.getItem('storage') === null) {
            objects = [];
            objects.push(object);
            localStorage.setItem('storage', JSON.stringify(objects));
        } else {
            objects = JSON.parse(localStorage.getItem('storage'));
            objects.push(object);
            localStorage.setItem('storage', JSON.stringify(objects));
        }
    }

}
