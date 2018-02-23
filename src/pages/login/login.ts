import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../model/user";
import {RegisterPage} from "../register/register";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private loginUrl = 'https://music-makers.herokuapp.com/login';
  model: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  login() {
    let options = {
      headers: new HttpHeaders({'Content-type': 'application/json', 'Accept': 'application/json'})
    };

    let user = <User>( {
      email: this.model.email,
      password: this.model.password
    });

    this.http.post(this.loginUrl, user, options)
      .subscribe(data => {
        console.log('inside next');
        console.log(data['_body']);
      }, error => {
        console.log('inside error');
        console.log(error);
      },
        () => {
        console.log('inside complete');
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  toRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
