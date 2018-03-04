import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {CalendarLessonDTO} from "../../model/calendarLesson";
import {LessonServiceProvider} from "../../providers/lesson-service/lesson-service";
import {Storage} from "@ionic/storage";
import {LessondetailsPage} from "../lessondetails/lessondetails";

/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})

export class AgendaPage {
  public lessons: CalendarLessonDTO[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient,
              public lessonServiceProvider: LessonServiceProvider,
              public storage: Storage) {

/*    // fetch token from storage and pass it with our provider
    this.storage.get('Authorization').then((res) => {
      this.lessonServiceProvider.getLessons(res)
        .subscribe( res => {
          this.lessons = res;
          console.log('Inside subscribe');
          for (let lesson of this.lessons) {
            console.log('Lesson ' + lesson.id + ': ' + lesson.name);
          }
        });
    });*/
  }
/*
  goToDetails(l: CalendarLessonDTO) {
    this.navCtrl.push(LessondetailsPage, {lesson: l});
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

}
