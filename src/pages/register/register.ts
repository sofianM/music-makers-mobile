import {Component} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {RegisterUser} from "../../model/registerUser";
import {HttpClient} from "@angular/common/http";
import { AlertController } from 'ionic-angular';
//oei
import {UserServiceProvider} from "../../providers/user-service/user-service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {regexValidators} from "../validators/validator";
import {TranslateService} from "@ngx-translate/core";

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
  birthday;
  equalPassword: boolean;
  public credentialsForm: FormGroup;
  public submitted: boolean = false;

  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              public navParams: NavParams,
              public http: HttpClient,
              private alertCtrl: AlertController,
              private formBuilder: FormBuilder,
              private userServiceProvider: UserServiceProvider,
              private translate: TranslateService) {
    this.birthday = new Date().toDateString();

    // Disable sidemenus (unneeded for register)
    this.menuCtrl.enable(false, 'leftSideMenu');
    this.menuCtrl.enable(false, 'rightSideMenu');

    this.credentialsForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.pattern(regexValidators.email), Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])],
      birthday: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    const registerUser = <RegisterUser>({
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
      this.userServiceProvider.register(registerUser)
        .subscribe(() => {
            console.log("succes");
          },
          error => {
            console.log("Register error: ", error);
          },
          () => {
            console.log("Complete");
            this.navCtrl.pop();
          });
    } else {
      this.presentAlert();
    }
  }

  checkPassword() {
    this.equalPassword = this.model.password == (this.model.confirmPassword);
  }

  presentAlert() {
    this.translate.get('register.alertTitle')
      .subscribe(title => {
        this.translate.get('register.alertSubTitle')
          .subscribe(subTitle => {
            this.translate.get('register.alertButton')
              .subscribe(alertButton => {
                let alert = this.alertCtrl.create({
                  title: title,
                  subTitle: subTitle,
                  buttons: [alertButton]
                });
                alert.present();
              })
          })
      });
  }
}
