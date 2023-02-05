import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../config';

const baseURL = `${API_URL}public`

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    headers = {
        headers: new HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "aplication/json"
        })
    };

    constructor(private http: HttpClient) { }

    login(email: string, password: string, type: string): Observable<any> {
        const creds = new HttpParams()
            .set('email', email)
            .set('password', password)
            .set('type', type)

        return this.http.post<any>(
            `${baseURL}/login`,
            creds.toString(),
            this.headers
        );
    }

}