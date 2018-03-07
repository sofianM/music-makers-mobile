import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserServiceProvider} from "../../providers/user-service/user-service";
import {Storage} from "@ionic/storage";

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
  public profilePic = 'assets/imgs/profile-picture-placeholder.png';

  constructor(public navCtrl: NavController, public navParams: NavParams, public userServiceProvider: UserServiceProvider, public storage: Storage) {
    this.storage.get('Authorization').then((res) => {
      this.userServiceProvider.getUserProfilePicture(res)
        .subscribe(data => {
            console.log('Pic: ' + (<any>data.valueOf()).pic);
            this.profilePic = (<any>data.valueOf()).pic;
          },
          error => {
            console.log('Error: ', error);
          },
          () => {
            console.log('Completed');
          });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersettingsPage');

  }



}
