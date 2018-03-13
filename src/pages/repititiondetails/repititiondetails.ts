import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RepititiondetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-repititiondetails',
  templateUrl: 'repititiondetails.html',
})
export class RepititiondetailsPage {
  public repitition = this.navParams.get("repitition");
  absent: boolean = false;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepititiondetailsPage');
  }

  setAbsent(iser) {
    console.log(this.absent);
  }
}
