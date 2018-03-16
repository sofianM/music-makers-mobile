import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ChangePassword} from "../../model/changepass";
import {RegisterUser} from "../../model/registerUser";
import {ProfilePic} from "../../model/profilepic";

@Injectable()
export class UserServiceProvider {
  private userRequestUrl = 'https://music-makers.herokuapp.com/user';

  constructor(public http: HttpClient) {}

  public register(registerUser: RegisterUser): Observable<any> {
    const options = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };
    return this.http.post(this.userRequestUrl+'/register', registerUser, options);
  }

  public getUserInfo(token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Accept': 'application/json', 'Authorization': token})
    };

    return this.http.get(this.userRequestUrl, httpOptions);
  }

  public changeFirstName(token: string, firstName: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Accept': 'application/json', 'Authorization': token})
    };

    return this.http.put(this.userRequestUrl+'/firstName/'+firstName, httpOptions);
  }

  public changeLastName(token: string, lastName: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Accept': 'application/json', 'Authorization': token})
    };

    return this.http.put(this.userRequestUrl+'/lastName/'+lastName, httpOptions);
  }

  public changePassword(token: string, newPassword: ChangePassword): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json', 'Authorization': token})
    };

    return this.http.put(this.userRequestUrl + '/pass', newPassword, httpOptions);
  }

  public getUserProfilePicture(token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Accept': 'application/json', 'Authorization': token})
    };

    return this.http.get(this.userRequestUrl + '/profilePicture', httpOptions);
  }

  public postUserProfilePicture(token: string, pic: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': token})
    };

    const profilePic: ProfilePic = {
      pic : pic
    };
    return this.http.post(this.userRequestUrl + '/profilePicture', profilePic, httpOptions);
  }
}
