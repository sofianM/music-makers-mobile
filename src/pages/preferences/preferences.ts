import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";

/**
 * Generated class for the PreferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html',
})
export class PreferencesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private translate: TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferencesPage');
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }

}
