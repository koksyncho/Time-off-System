import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

@Injectable()
export class UserService {
    users: Array<User>;

    loginMessage: String;
    registerMessage: String;

    constructor() {
        this.users = new Array<User>();
        this.users.push(new User('tito', 'mail@mail.mail', '1234'));

        this.loginMessage = '';
    }

    public login(email: string, password: string): Promise<boolean> {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].email === email
            && this.users[i].password === password) {

                console.log('*Login Successful');
                return Promise.resolve(true);
        }
    }

        console.log('*Wrong Email or Passowrd');
        return Promise.resolve(false);
    }

    public register(username: string, email: string, password: string) {
        if (!this.userAlreadyExists(username, email, password)) {
            this.users.push(new User(username, email, password));
        }
    }

    private userAlreadyExists(username: string, email: string, password: string): boolean {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].username === null
            || this.users[i].username === ''
            || this.users[i].email === null
            || this.users[i].email === ''
            || this.users[i].password === null
            || this.users[i].password === '') {

                console.log('*Registration Failed: Make sure all text inputs are filled');
                return true;
            } else if (this.users[i].username === username) {
                console.log('*Registration Failed: Username Already Exists');
                return true;
            }
        }
        console.log('*Registration Successful');
        return false;
    }

    private inputNotFilled(i: any): boolean {
        return this.users[i].username === null
        || this.users[i].username === ''
        || this.users[i].email === null
        || this.users[i].email === ''
        || this.users[i].password === null
        || this.users[i].password === '';
    }
}
