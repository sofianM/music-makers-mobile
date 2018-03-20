import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {GroupDTO, StudentRepetitionDTO} from "../../model/group";
import {Observable} from "rxjs/Observable";
import {ConcertStudentDTO} from "../../model/concert";
import {Storage} from "@ionic/storage";

/*
  Generated class for the ConcertServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConcertServiceProvider {
  private getConcertsAsStudentURL = 'https://music-makers.herokuapp.com/concerts/getConcertsAsStudent';
  private getConcertsAsTeacherURL = 'https://music-makers.herokuapp.com/concerts/getConcertsAsTeacher';


  constructor(public http: HttpClient, private storage: Storage) {
  }

  public getConcerts(token: string): Observable<any>{
    console.log('Inside provider.getGroups()');
    console.log('Token: ' + token);

    // create httpOptions with Authorization header
    let httpOptions = {
      headers: new HttpHeaders({'Accept': 'application/json', 'Authorization': token})
    };
    // GET
    return this.getRoles().mergeMap(roles => {
      if (this.isStudent(roles)){
        return this.http.get(this.getConcertsAsStudentURL, httpOptions)
          .map(res => res as ConcertStudentDTO[]);
      } else {
        return this.http.get(this.getConcertsAsTeacherURL, httpOptions)
          .map(res => res as ConcertStudentDTO[]);
      }
    })
  }
  private getRoles(): Observable<any> {
    return Observable.fromPromise(this.storage.get('Roles'));
  }

  private isStudent(roles: string): boolean {
    return (roles.indexOf('ROLE_STUDENT') >= 0);
  }

}
