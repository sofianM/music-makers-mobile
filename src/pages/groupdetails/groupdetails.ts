import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GroupdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groupdetails',
  templateUrl: 'groupdetails.html',
})
export class GroupdetailsPage {
  public group = this.navParams.get("group");


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  oei(hallo, b, c) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupdetailsPage');
  }

}
