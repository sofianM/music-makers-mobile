import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegisterUser} from "../../model/registerUser";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginPage} from "../login/login";

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
  public registerURL: 'https://music-makers.herokuapp.com/user/register';

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.birthday = new Date().toDateString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    let options = {
      headers: new HttpHeaders({'Content-type': 'application/json', 'Accept': 'application/json'})
    };

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

<<<<<<< HEAD
    this.http.post(this.registerURL, registerUser, options)
      .subscribe(data => {
          console.log("subscribe: " +data);
        },
        error => {
          console.log("error: " + error);
        },
        () => {
        console.log("Complete");
        this.navCtrl.pop();
        });
    console.log(registerUser);
=======
    console.log("Test " + registerUser);
>>>>>>> 0bfe969e51e17757a1682e8bf9ac3a863dda0d73

  }

}
