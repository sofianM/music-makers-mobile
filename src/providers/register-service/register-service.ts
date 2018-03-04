import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {RegisterUser} from "../../model/registerUser";
import {Observable} from "rxjs/Observable";

const options = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable()
export class RegisterServiceProvider {
  private registerUrl = 'https://music-makers.herokuapp.com/user/register';

  constructor(public http: HttpClient) {
    console.log('Hello RegisterServiceProvider Provider');
  }

  public register(registerUser: RegisterUser): Observable<any> {
    return this.http.post(this.registerUrl, registerUser, options);
  }

}
