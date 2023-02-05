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

    public setLogin(token: string): void {
        localStorage.setItem('token', token);
        this.loginChanged.emit(this.loggedUser);
    }

    public setLogout() {
        localStorage.removeItem('token');
        this.loginChanged.emit(this.loggedUser);
        this.router.navigateByUrl('/consumer/login');
    }

}