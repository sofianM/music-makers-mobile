import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the LibraryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LibraryServiceProvider {
  private getInstrumentsUrl = 'https://music-makers.herokuapp.com/instruments';
  private getGradesUrl = 'https://music-makers.herokuapp.com/instruments/grades';

  constructor(public http: HttpClient) {
    console.log('Hello LibraryServiceProvider Provider');
  }

  getAllInstruments(token: string): Observable<any> {
    const httpOptions = {
      headers: {'Accept': 'application/json', 'Authorization': token}
    };
    return this.http.get(this.getInstrumentsUrl, httpOptions);
  }

  public getGrades(token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Accept': 'application/json', 'Authorization': token})
    };
    return this.http.get(this.getGradesUrl, httpOptions)
  }
}
