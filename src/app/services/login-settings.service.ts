import { UserModel } from './../models/user-model';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginSettingsService {

    @Output() loginChanged = new EventEmitter<UserModel>();
    private loggedUser!: UserModel;

    constructor(
        private router: Router
    ) { }

    public setLogin(data: any): void {
        localStorage.setItem('token', data._token);
        localStorage.setItem('id', data._id);
        localStorage.setItem('full_name', data.full_name);
        localStorage.setItem('picture_url', data.picture_url);
        this.loginChanged.emit(this.loggedUser);
    }

    public setLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('full_name');
        localStorage.removeItem('picture_url');
        this.loginChanged.emit(this.loggedUser);
        this.router.navigateByUrl('/consumer/login');
    }

}