import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_URL } from './../../../src/config';

const baseURL = `${API_URL}api/Login`

@Injectable({
  providedIn: 'root'
})

export class LoginDispatcherService {
  constructor(private httpClient: HttpClient) { }

  public Login(loginModel: any): Observable<any> {
    return this.httpClient.post(baseURL, loginModel);
  }
}

