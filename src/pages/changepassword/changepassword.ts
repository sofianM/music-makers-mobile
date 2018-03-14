import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChangePassword} from "../../model/changepass";
import {UserServiceProvider} from "../../providers/user-service/user-service";
import {Storage} from "@ionic/storage";

/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {

  model: any = {};
  errorVisible: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              public userServiceProvider: UserServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }

  changePassword() {
    const changePassword = <ChangePassword> ({
      currentPassword: this.model.currentPassword,
      newPassword: this.model.newPassword,
      confirmNewPassword: this.model.confirmNewPassword
    });

    if (changePassword.newPassword == changePassword.confirmNewPassword){
      this.getToken().then(token => {
        this.userServiceProvider.changePassword(token, changePassword)
          .subscribe(() => console.log(''),
            error => console.log('ChangePasswordError: ', error),
            () => {
              console.log('Change Password Completed');
              this.navCtrl.pop();
            });
      });
    } else {
      this.errorVisible = true;
    }
  }

  getToken(): Promise<any> {
    return this.storage.get('Authorization');
  }
}
