import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {Storage} from "@ionic/storage";
// import * as a from "../../assets/test.js"


/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})

export class AgendaPage {
  constructor(public navCtrl: NavController,
              public http: HttpClient,
              public storage: Storage) {
    // console.log(a.myFunction(2, 2));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }
}
