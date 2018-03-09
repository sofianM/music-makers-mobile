import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the LessondetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lessondetails',
  templateUrl: 'lessondetails.html',
})
export class LessondetailsPage {
  public lesson = this.navParams.get("lesson");
  absent: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("Test new branch");

  }

  capitalize(input) {
    return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessondetailsPage');
    //test
  }


  setAbsent(iser) {
    console.log(this.absent);
  }

}
