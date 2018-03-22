import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {Storage} from "@ionic/storage";

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
  public isEnglish = true;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              private translate: TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferencesPage');
    console.log('isEnglish: ' + this.isEnglish);
    this.storage.get('lang').then(res => {
      if (res == null) {
        this.isEnglish = true;
      } else if (res == 'en') {
        this.isEnglish = true;
        this.useLanguage(res);
      } else {
        this.isEnglish = false;
        this.useLanguage(res);
      }
      console.log('isEnglish: ' + this.isEnglish);
    })
  }
  useLanguage(language: string) {
    this.storage.set('lang', language);
    this.translate.use(language);
  }

}
