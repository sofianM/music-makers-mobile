import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LibraryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LibraryServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LibraryServiceProvider Provider');
  }

}
