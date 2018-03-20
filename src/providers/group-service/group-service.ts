import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';

import {Storage} from "@ionic/storage";
import {GroupUserDTO} from "../../model/groupUser";
import {CalendarLessonDTO} from "../../model/calendarLesson";
import {GroupDTO, StudentRepetitionDTO} from "../../model/group";

@Injectable()
export class GroupServiceProvider{
  private getStudentsOfGroupUrl = 'https://music-makers.herokuapp.com/groups/';
  private getGroupsAsTeacher = 'https://music-makers.herokuapp.com/groups/getGroupsAsTeacher';
  private getGroupsAsStudent = 'https://music-makers.herokuapp.com/groups/getGroupsAsStudent';

  private getRepetitionsAsTeacher = 'https://music-makers.herokuapp.com/groups/getRepetitionsAsTeacher';
  private getRepetitionsAsStudent = 'https://music-makers.herokuapp.com/groups/getRepetitionsAsStudent';

  private roles: string;


  constructor(public http: HttpClient, private storage: Storage) {
  }

  public getStudentsOfGroup(id: number) : Observable<any> {

    let httpOptions = {
      headers: new HttpHeaders({'Accept': 'application/json'})
    };

    // GET
    return this.http.get(this.getStudentsOfGroupUrl + id, httpOptions)
      .map(res => res as GroupUserDTO[]);

  }
  public getGroups(token: string): Observable<any>{
    console.log('Inside provider.getGroups()');
    console.log('Token: ' + token);

    // create httpOptions with Authorization header
    let httpOptions = {
      headers: new HttpHeaders({'Accept': 'application/json', 'Authorization': token})
    };

    // GET
    return this.getRoles().mergeMap(roles => {
      if (this.isStudent(roles)){
        return this.http.get(this.getGroupsAsStudent, httpOptions)
          .map(res => res as GroupDTO[]);
      } else {
        return this.http.get(this.getGroupsAsTeacher, httpOptions)
          .map(res => res as GroupDTO[]);
      }
    })

  }

  public getRepetitions(token: string): Observable<any>{
    console.log('Inside provider.getGroups()');
    console.log('Token: ' + token);

    // create httpOptions with Authorization header
    let httpOptions = {
      headers: new HttpHeaders({'Accept': 'application/json', 'Authorization': token})
    };

    // GET
    return this.getRoles().mergeMap(roles => {
      if (this.isStudent(roles)){
        return this.http.get(this.getRepetitionsAsStudent, httpOptions)
          .map(res => res as StudentRepetitionDTO[]);
      } else {
        return this.http.get(this.getRepetitionsAsTeacher, httpOptions)
          .map(res => res as StudentRepetitionDTO[]);
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
