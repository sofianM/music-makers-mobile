import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {UserServiceProvider} from "../../providers/user-service/user-service";
import {Storage} from "@ionic/storage";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {Crop} from "@ionic-native/crop";
import {Base64} from "@ionic-native/base64";
import {ChangepasswordPage} from "../changepassword/changepassword";
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
  currentFirstName: string;
  currentLastName: string;
  model: any = {};
  public profilePic = 'assets/imgs/profile-picture-placeholder.png';

  @ViewChild('imageSrc') input: ElementRef;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public navParams: NavParams,
              public userServiceProvider: UserServiceProvider,
              public storage: Storage,
              public camera: Camera,
              public crop: Crop,
              public base: Base64) {
    let loading = this.loadingCtrl.create({
      content: 'Loading user info...'
    });
    loading.present();
    this.getToken().then((token) => {
      this.userServiceProvider.getUserProfilePicture(token)
        .subscribe(data => {
            if (data != null) {
              console.log('Pic: ' + (<any>data.valueOf()).pic);
              this.profilePic = (<any>data.valueOf()).pic;
            }
          },
          error => {
            console.log('Error constructor: ', error);
          },
          () => {
            console.log('Completed constructor');
          });
      this.userServiceProvider.getUserInfo(token)
        .subscribe(user => {
          this.currentFirstName = (<any>user.valueOf()).firstName;
          this.currentLastName = (<any>user.valueOf()).lastName;

        },
          error => console.log('GetUserInfoError: ', error),
          () => loading.dismiss())
    });
  }

  changeName() {
    this.getToken().then(token => {
      this.userServiceProvider.changeFirstName(token, this.model.firstName)
        .subscribe(updatedUser => console.log('Updating user'),
          error => console.log('ChangeFirstNameError: ', error),
          () => console.log('Change firstName completed'));
      this.userServiceProvider.changeLastName(token, this.model.lastName)
        .subscribe(updatedUser => console.log('Updating user'),
          error => console.log('ChangeLastNameError: ', error),
          () => console.log('Change lastName completed'));
    })
  }

  takePicture() {
    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 400,
      targetHeight: 400
    };

    /*
    return this.camera.getPicture(cameraOptions)
      .then((fileUri) => {
      fileUri = 'file://' + fileUri;
      return this.crop.crop(fileUri, {quality: 100, targetWidth: 300, targetHeight: 300});
      })
      .then((path) => {
        console.log('Cropped Image Path: ' + path);
        this.profilePic = path;
        this.base.encodeFile(this.profilePic).then((baseres) => {

        });
        this.storage.get('Authorization')
          .then( (res) => {
            this.userServiceProvider.postUserProfilePicture(res, this.profilePic)
              .subscribe(() => console.log('Next OK'),
                error => console.log('Error: ', error),
                () => console.log('Completed'))
          });
        return path;
    })
    */

    this.camera.getPicture(cameraOptions)
      .then((fileUri) => {
        this.cropPicture(fileUri)
          .then((croppedImgPath) => {
            this.toBase64(croppedImgPath)
              .then((base64img) => {
                this.setProfilePic(base64img);
                this.getToken()
                  .then((token) => {
                    this.userServiceProvider.postUserProfilePicture(token, base64img)
                      .subscribe(() => console.log('Next OK'),
                        error => console.log('PostPictureError: ', error),
                        () => console.log('Compeleted'))
                  })
              })
          })
      })
  }

  cropPicture(fileUri: string): Promise<any> {
    return this.crop.crop('file://'+fileUri, {quality: 100, targetWidth: 300, targetHeight: 300});
  }

  toBase64(path: string): Promise<any> {
    return this.base.encodeFile(path);
  }

  setProfilePic(img: string) {
    this.profilePic = img;
  }

  getToken(): Promise<any> {
    return this.storage.get('Authorization');
  }

  goToChangePasswordPage() {
    this.navCtrl.push(ChangepasswordPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersettingsPage');

  }
}
