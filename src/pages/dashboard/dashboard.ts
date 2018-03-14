import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LibraryPage} from "../library/library";
import {GroupsPage} from "../groups/groups";
import {AgendaPage} from "../agenda/agenda";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
}

