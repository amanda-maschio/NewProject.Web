import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../../../config';

const baseURL = `${API_URL}consumer`

@Injectable({
    providedIn: 'root'
})

export class RegisterConsumerService {

    headers = {
        headers: new HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "aplication/json"
        })
    };

    constructor(private http: HttpClient) { }

    createUser(user: any): Observable<any> {
        const creds = new HttpParams()
            .set('user_email', user.user_email)
            .set('password', user.password)
            .set('type_user', user.type_user)
            .set('full_name', user.full_name)
            .set('phone', user.phone)
            .set('cpf', user.cpf)

        return this.http.post<any>(
            `${baseURL}/create_user`,
            creds.toString(),
            this.headers
        );
    }
}