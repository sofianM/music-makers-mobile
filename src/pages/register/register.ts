import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegisterUser} from "../../model/registerUser";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { AlertController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import { DatePicker } from '@ionic-native/date-picker';

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
  private registerUrl = 'https://music-makers.herokuapp.com/user/register';
  model: any = {};
  private date: any;
  birthday;
  equalPassword: boolean;




  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private alertCtrl: AlertController, private datePicker: DatePicker) {
    this.birthday = new Date().toDateString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  checkPassword() {
    this.equalPassword = this.model.password == (this.model.confirmPassword);
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Wachtwoord',
      subTitle: 'Wachtwoorden komen niet overeen!',
      buttons: ['Oke']
    });
    alert.present();
  }

  geboortedatum() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }
  register() {
    let options = {
      headers: new HttpHeaders({'Content-type': 'application/json', 'Accept': 'application/json, */*'})
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
    this.checkPassword();
    if(this.equalPassword){
      this.http.post(this.registerUrl, registerUser, options)
        .subscribe(data => {
            console.log("subscribe: " +data);
          },
          error => {
            console.log("error: ", error);
          },
          () => {
            console.log("Complete");
            this.navCtrl.pop();
          });
    } else {
      this.presentAlert();
    }
  }

}
