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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.runAlphaTab();

  }
  runAlphaTab() {
    $(document).ready(function () {
      $('#alphaTabDataInit').alphaTab({
        file: 'https://rawgit.com/CoderLine/alphaTab/master/Samples/JavaScript/files/Canon.gp5'
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlphaTabPage');
  }

  songs(selectedValue) {
    console.log(selectedValue);
  }

  toggle() {
    $('.aa').slideToggle();
  }
}
