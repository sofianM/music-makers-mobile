import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InstrumentsPage} from "../instruments/instruments";
import {AlphaTabPage} from "../alpha-tab/alpha-tab";

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

  goToInstruments() {
    this.navCtrl.push(InstrumentsPage);
  }

  goToMusicSheets() {
    this.navCtrl.push(AlphaTabPage);
  }

  goToChords() {

  }

}
