import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LibraryServiceProvider} from "../../providers/library-service/library-service";
import {Storage} from "@ionic/storage";
import {InstrumentGradeDTO} from "../../model/instrument";

/**
 * Generated class for the GradesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grades',
  templateUrl: 'grades.html',
})
export class GradesPage {

  grades: InstrumentGradeDTO[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              public libraryServiceProvider: LibraryServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GradesPage');

    this.storage.get('Authorization')
      .then(token => {
        this.libraryServiceProvider.getGrades(token)
          .subscribe(grades => {
            this.grades = grades;
          },
            error => console.log('GetGradesError: ', error),
            () => console.log('Completed'))
    })
  }

}
