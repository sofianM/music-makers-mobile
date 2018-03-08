import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserServiceProvider {
  private getUserInfoUrl = 'https://music-makers.herokuapp.com/user';
  private userProfilePictureUrl = 'https://music-makers.herokuapp.com/user/profilePicture';

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  public getUserInfo(token: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({'Accept': 'application/json', 'Authorization': token})
    };

    // GET
    return this.http.get(this.getUserInfoUrl, httpOptions);
  }

  public getUserProfilePicture(token: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({'Accept': 'application/json', 'Authorization': token})
    };

    // GET
    return this.http.get(this.userProfilePictureUrl, httpOptions);
  }

  public postUserProfilePicture(token: string, pic: string) {
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': token})
    };

    return this.http.post(this.userProfilePictureUrl, pic, httpOptions);
  }

}
