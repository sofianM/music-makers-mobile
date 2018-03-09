import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserServiceProvider} from "../../providers/user-service/user-service";
import {Storage} from "@ionic/storage";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {Crop} from "@ionic-native/crop";
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

  @ViewChild('imageSrc') input: ElementRef;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userServiceProvider: UserServiceProvider,
              public storage: Storage,
              public camera: Camera,
              public crop: Crop) {
    this.storage.get('Authorization').then((res) => {
      this.userServiceProvider.getUserProfilePicture(res)
        .subscribe(data => {
            if (data != null) {
              console.log('Pic: ' + (<any>data.valueOf()).pic);
              this.profilePic = (<any>data.valueOf()).pic;
            }
          },
          error => {
            console.log('Error: ', error);
          },
          () => {
            console.log('Completed');
          });
    });
  }

  takePicture(): Promise<any> {
    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 400,
      targetHeight: 400
    };

    return this.camera.getPicture(cameraOptions)
      .then((fileUri) => {
      //this.profilePic = 'data:image/jpeg;base64,' + imageData;
      fileUri = 'file://' + fileUri;
      return this.crop.crop(fileUri, {quality: 100, targetWidth: 300, targetHeight: 300});

      })
      .then((path) => {
        console.log('Cropped Image Path: ' + path);
        this.profilePic = path;
        this.storage.get('Authorization')
          .then( (res) => {
            this.userServiceProvider.postUserProfilePicture(res, this.profilePic)
              .subscribe(() => console.log('Next OK'),
                error => console.log('Error: ', error),
                () => console.log('Completed'))
          });

        return path;
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersettingsPage');

  }



}
