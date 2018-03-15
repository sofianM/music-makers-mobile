import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {User} from "../../model/user";
import {RegisterPage} from "../register/register";
import {Storage} from "@ionic/storage";
import 'rxjs/add/operator/map';
import {DashboardPage} from "../dashboard/dashboard";
import {LoginServiceProvider} from "../../providers/login-service/login-service";


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
  model: any = {};
  public visible = false;

  constructor(public loginServiceProvider: LoginServiceProvider,
              public navCtrl: NavController,
              public menuCtrl: MenuController,
              public navParams: NavParams,
              public http: HttpClient,
              private storage: Storage) {
    this.menuCtrl.enable(false, 'leftSideMenu');
    this.menuCtrl.enable(false, 'rightSideMenu');
  }

  login() {
    let user = <User>({
      email: this.model.email,
      password: this.model.password
    });

    this.loginServiceProvider.login(user)
      .subscribe(data => {
        this.storage.set('Authorization', (<any>data.valueOf()).authorization);
        this.storage.set('Roles', (<any>data.valueOf()).roles);
      }, error => {
        console.log("error: ", error);
        this.visible = true;
      },
      () => {
        console.log("Login success");
        if (this.visible) this.visible = false;

        this.menuCtrl.enable(true, 'leftSideMenu');
        this.menuCtrl.enable(true, 'rightSideMenu');
        this.navCtrl.setRoot(DashboardPage);
      });
  }

  toRegister() {
    let navOptions = {
      animation: 'ios-transition'
    };
    this.navCtrl.push(RegisterPage, null, navOptions);

    // this.navCtrl.push(RegisterPage);
  }

}
