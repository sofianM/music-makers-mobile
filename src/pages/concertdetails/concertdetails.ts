import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConcertdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-concertdetails',
  templateUrl: 'concertdetails.html',
})
export class ConcertdetailsPage {
  public concert = this.navParams.get("concert");
  absent: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConcertdetailsPage');
  }
  setAbsent() {
    this.absent = !this.absent;
    console.log(this.absent);
  }
  oneA(input) {
    var stringValue = String(input);
    var stringLength = stringValue.length;
    if(stringLength == 1) {
      var zero = "0";
      return zero.concat(stringValue);
    } else {
      return input;
    }
  }

}
