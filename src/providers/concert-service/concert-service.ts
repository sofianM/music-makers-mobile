import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {StudentRepetitionDTO} from "../../model/group";
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
  private getConcertsURL = 'https://music-makers.herokuapp.com/concerts/getConcerts';

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
    return this.http.get(this.getConcertsURL, httpOptions)
      .map(res => res as ConcertStudentDTO[]);
  }

}
