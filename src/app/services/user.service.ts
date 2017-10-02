import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

@Injectable()
export class UserService {

    users: User[];
    public isLogged: boolean;

    public pageName: string;

    public currentUsername: string;

    constructor() {
        this.users = new Array<User>();
        this.initLocalStorage();

        this.isLogged = false;
    }

    private initLocalStorage() {
        this.users = JSON.parse(localStorage.getItem('storage'));

        if (localStorage.getItem('storage') === null) {
            this.users = [{'username': 'Test', 'email': 'Test', 'password': 'test'}];
        } else if (this.users.length === 0) {
            this.users = [{'username': 'Test', 'email': 'Test', 'password': 'test'}];
        }
    }

    login(username: string, password: string) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.credentialsAreCorrect(i, username, password)) {
                this.isLogged = true;
                this.currentUsername = this.users[i].username;

                console.log('login attempt successful');
                break;
            } else {
                this.isLogged = false;
            }
        }
        if (!this.isLogged) {
            console.log('login attempt failed');
        }
    }

    private credentialsAreCorrect(i: any, username: any, password: any): boolean {
        return this.users[i].username === username && this.users[i].password === password;
    }

    register(username: string, email: string, password: string) {
        if (!this.userAlreadyExists(username, password)) {
            this.createNewUser(username, email, password);
            console.log('register attempt successful.');
        } else {
            console.log('register attempt failed.');
        }
    }

    private userAlreadyExists(username: string, password: string): boolean {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].username === username) {
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
