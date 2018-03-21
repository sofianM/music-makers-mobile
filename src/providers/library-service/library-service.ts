import { HttpClient } from '@angular/common/http';
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

  constructor(public http: HttpClient) {
    console.log('Hello LibraryServiceProvider Provider');
  }

  getAllInstruments(token: string): Observable<any> {
    const httpHeaders = {
      headers: {'Accept': 'application/json', 'Authorization': token}
    };
    return this.http.get(this.getInstrumentsUrl, httpHeaders);
  }
}
