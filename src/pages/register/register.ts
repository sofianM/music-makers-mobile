import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegisterUser} from "../../model/registerUser";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  model: any = {};
  private date: any;
  birthday;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.birthday = new Date().toDateString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {

    let registerUser = <RegisterUser>({
      firstName: this.model.firstName,
      lastName: this.model.lastName,
      password: this.model.password,
      confirmPassword: this.model.confirmPassword,
      year: parseInt(this.birthday.split('-')[0], 10),
      month: parseInt(this.birthday.split('-')[1], 10),
      day: parseInt(this.birthday.split('-')[2], 10),
      email: this.model.email
    });

    console.log("Test " + registerUser);

  }

}
