import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {CalendarLessonDTO} from "../../model/calendarLesson";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LessonServiceProvider {
  private getLessonsUrl = 'https://music-makers.herokuapp.com/lessons';

  constructor(public http: HttpClient) {
  }

  public getLessons(token: string) : Observable<any> {
    console.log('Inside provider.getLessons()');
    console.log('Token: ' + token);

    // create httpOptions with Authorization header
    let httpOptions = {
      headers: new HttpHeaders({'Accept': 'application/json', 'Authorization': token})
    };

    // GET
    return this.http.get(this.getLessonsUrl, httpOptions)
      .map(res => res as CalendarLessonDTO[]);
  }

}
