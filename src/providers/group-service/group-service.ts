import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {GroupUserDTO} from "../../model/groupUser";
import {CalendarLessonDTO} from "../../model/calendarLesson";
import {GroupDTO} from "../../model/group";

@Injectable()
export class GroupServiceProvider{
  private getStudentsOfGroupUrl = 'https://music-makers.herokuapp.com/groups/';
  private getGroupsUrl = 'https://music-makers.herokuapp.com/groups/getGroups';


  constructor(public http: HttpClient) {
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
    return this.http.get(this.getGroupsUrl, httpOptions)
      .map(res => res as GroupDTO[]);
  }

}
