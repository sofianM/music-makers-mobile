import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LibraryPage} from "../library/library";
import {AgendaPage} from "../agenda/agenda";
import {GroupsPage} from "../groups/groups";
import {Storage} from '@ionic/storage';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  goToAgenda() {
    this.navCtrl.push(AgendaPage);
  }

  goToGroups() {
    this.navCtrl.push(GroupsPage);
  }

  goToLibrary() {
    this.navCtrl.push(LibraryPage);
  }

  getStorage() {
    // Or to get a key/value pair
    this.storage.get('Authorization').then((val) => {
      console.log('Authorization', val);
    });
  }
}

