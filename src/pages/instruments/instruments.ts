import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";

/**
 * Generated class for the InstrumentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instruments',
  templateUrl: 'instruments.html',
})
export class InstrumentsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstrumentsPage');
    this.getToken().then(token => {

    })
  }

  getToken(): Promise<any> {
    return this.storage.get('Authorization');
  }

}
