import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DashboardPage} from "../dashboard/dashboard";

/**
 * Generated class for the UsersettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usersettings',
  templateUrl: 'usersettings.html',
})
export class UsersettingsPage {
  firstName: string;
  lastName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersettingsPage');
  }

  test() {
    this.navCtrl.setRoot(DashboardPage);
  }

}
