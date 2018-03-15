import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {LessondetailsPage} from "../../pages/lessondetails/lessondetails";
import {LessonServiceProvider} from "../../providers/lesson-service/lesson-service";
import {CalendarLessonDTO, LessonCalendarDictionary, SingleCalenderLesson} from "../../model/calendarLesson";
import {Storage} from "@ionic/storage";
import {NavController} from "ionic-angular";

/**
 * Generated class for the CLessonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'c-lesson',
  templateUrl: 'c-lesson.html'
})
export class CLessonComponent implements OnInit{

  public lessons: LessonCalendarDictionary;
  accordionExapanded = false;
  @ViewChild("cc") cardContent: any;
  public arr = [];

  icon: string = "arrow-forward";

  constructor(public navCtrl: NavController,public renderer: Renderer2, public storage: Storage,public lessonServiceProvider: LessonServiceProvider,) {
    this.storage.get('Authorization').then((res) => {
      this.lessonServiceProvider.getLessons(res)
        .subscribe( res => {
          this.sortLesson(res);
          console.log("Length:");
          let a = this.lessons.getKeys()[0];
          console.log(this.lessons.getKeys().length);
        });
    });
  }

  ngOnInit() {
    console.log(this.cardContent.nativeElement);
    this.renderer.setStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
  }

  private sortLesson(lessons: CalendarLessonDTO[]) {
    const dict: LessonCalendarDictionary = new LessonCalendarDictionary();
    for(const lesson of lessons) {
      for(const date of lesson.startDates) {
        const c: SingleCalenderLesson = new SingleCalenderLesson(lesson);
        dict.put(date, c);
      }
    }
    this.lessons = dict;
  }

  goToDetails(k: LessonCalendarDictionary, l: CalendarLessonDTO[]) {
    this.navCtrl.push(LessondetailsPage, {lessonDate: k, lesson: l});
  }

  toggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setStyle(this.cardContent.nativeElement, "max-height", "0px");
      this.renderer.setStyle(this.cardContent.nativeElement, "padding", "0px 16px");

    } else {
      this.renderer.setStyle(this.cardContent.nativeElement, "max-height", "500px");
      this.renderer.setStyle(this.cardContent.nativeElement, "padding", "13px 16px");

    }
    this.accordionExapanded = !this.accordionExapanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

}
