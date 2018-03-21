import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
declare var jquery: any;
declare var $: any;
declare var alphaTab: any;
declare var alphaSynth: any;

/**
 * Generated class for the AlphaTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alpha-tab',
  templateUrl: 'alpha-tab.html',
})
export class AlphaTabPage {
  model: any = {};
  // song = 'choose a song';
  song = 'Rock Licks - Some Licks From Jimi Hendrix"';


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  runAlphaTab() {
    $(document).ready(function () {
      $('#alphaTabDataInit').alphaTab({
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlphaTabPage');
  }

  songs(selectedValue) {
    console.log(selectedValue);
    this.song = selectedValue;
    this.runAlphaTab();
  }

  toggle() {
    $('.aa').slideToggle();
  }
}
