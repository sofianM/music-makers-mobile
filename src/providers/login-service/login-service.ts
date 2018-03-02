import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from "../../model/user";
import {Observable} from "rxjs/Observable";

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json', 'Accept': 'application/json'})
};

@Injectable()
export class LoginServiceProvider {

  private loginUrl = 'https://music-makers.herokuapp.com/login';

  constructor(public http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post(this.loginUrl, user, httpOptions);
  }

}
