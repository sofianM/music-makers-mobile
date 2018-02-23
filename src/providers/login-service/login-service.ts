import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from "../../model/user";

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json', 'Accept': 'application/json'})
};

@Injectable()
export class LoginServiceProvider {

  private loginUrl = 'https://music-makers.herokuapp.com/login';

  constructor(public http: HttpClient) {
    console.log('Hello LoginServiceProvider Provider');
  }

  login(user: User) {
    /*
    if (this.data){
      return Promise.resolve(this.data);
    }
    */

    return new Promise(resolve => {
      this.http.post(this.loginUrl, user, httpOptions)
    })
  }

}
