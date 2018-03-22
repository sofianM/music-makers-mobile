import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {LibraryServiceProvider} from "../../providers/library-service/library-service";
import {InstrumentDTO} from "../../model/instrument";

/**
 * Generated class for the InstrumentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instruments',
  templateUrl: 'instruments.html',
})
export class InstrumentsPage {
  instruments: InstrumentDTO[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              public libraryServiceProvider: LibraryServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstrumentsPage');
    this.getToken().then(token => {
      this.libraryServiceProvider.getAllInstruments(token)
        .subscribe(instruments => {
          this.instruments = instruments;
          for( let instrument of this.instruments) {
            console.log(instrument.name);
            console.log(instrument.soort.name);
            console.log(instrument.instrumentType.name);
            console.log(instrument.uitvoering.name);
          }
        },
            error => console.log('GetAllInstrumentsError: ', error),
          () => console.log('Completed'))
    });
  }

  getToken(): Promise<any> {
    return this.storage.get('Authorization');
  }

}
