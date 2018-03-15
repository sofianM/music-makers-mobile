import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RepetitiondetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-repetitiondetails',
  templateUrl: 'repetitiondetails.html',
})
export class RepetitiondetailsPage {
  public repetition = this.navParams.get("repetition");
  absent: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepetitiondetailsPage');
  }
  setAbsent() {
    console.log(this.absent);
    this.absent = !this.absent;
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
