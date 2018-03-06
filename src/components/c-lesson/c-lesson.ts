import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {LessondetailsPage} from "../../pages/lessondetails/lessondetails";
import {LessonServiceProvider} from "../../providers/lesson-service/lesson-service";
import {CalendarLessonDTO} from "../../model/calendarLesson";
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

  public lessons: CalendarLessonDTO[];
  accordionExapanded = false;
  @ViewChild("cc") cardContent: any;

  icon: string = "arrow-forward";

  constructor(public navCtrl: NavController,public renderer: Renderer2, public storage: Storage,public lessonServiceProvider: LessonServiceProvider,) {
    this.storage.get('Authorization').then((res) => {
      this.lessonServiceProvider.getLessons(res)
        .subscribe( res => {
          this.lessons = res;
          console.log('Inside subscribe');
          for (let lesson of this.lessons) {
            console.log('Lesson ' + lesson.id + ': ' + lesson.name);
          }
        });
    });
  }

  ngOnInit() {
    console.log(this.cardContent.nativeElement);
    this.renderer.setStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
  }

  goToDetails(l: CalendarLessonDTO) {
    this.navCtrl.push(LessondetailsPage, {lesson: l});
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
