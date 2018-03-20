import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {LessondetailsPage} from "../../pages/lessondetails/lessondetails";
import {LessonServiceProvider} from "../../providers/lesson-service/lesson-service";
import {CalendarLessonDTO} from "../../model/calendarLesson";
import {Storage} from "@ionic/storage";
import {NavController} from "ionic-angular";
import {GroupServiceProvider} from "../../providers/group-service/group-service";
import {RepetitiondetailsPage} from "../../pages/repetitiondetails/repetitiondetails";
import {StudentRepetitionDTO} from "../../model/group";
import {ConcertStudentDTO} from "../../model/concert";
import {ConcertServiceProvider} from "../../providers/concert-service/concert-service";
import {ConcertdetailsPage} from "../../pages/concertdetails/concertdetails";

/**
 * Generated class for the CConcertComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'c-concert',
  templateUrl: 'c-concert.html'
})
export class CConcertComponent implements OnInit{

  public concerts: ConcertStudentDTO[];
  accordionExpanded = false;
  icon: string = "arrow-forward";
  text: string;

  @ViewChild('cc') cardContent: any;

  constructor(public navCtrl: NavController,
              public renderer: Renderer2,
              public storage: Storage,
              public concertServiceProvider: ConcertServiceProvider) {
    this.storage.get('Authorization').then((res) => {
      this.concertServiceProvider.getConcerts(res)
        .subscribe( res => {
            this.concerts = res;
            console.log('Inside subscribe: ', res);
            for (let concert of this.concerts) console.log('Concert ' + concert.id + ': ' + concert.concertInfo);
          },
          error => console.log('GetConcertsError: ', error),
          () => console.log('Completed'));
    });
  }
  ngOnInit(): void {
    console.log(this.cardContent.nativeElement);
    this.renderer.setStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
  }

  toggleAccordion() {
    if (this.accordionExpanded) {
      this.renderer.setStyle(this.cardContent.nativeElement, "max-height", "0px");
      this.renderer.setStyle(this.cardContent.nativeElement, "padding", "0px 16px");

    } else {
      this.renderer.setStyle(this.cardContent.nativeElement, "max-height", "500px");
      this.renderer.setStyle(this.cardContent.nativeElement, "padding", "13px 16px");

    }
    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

  goToConcertDetails(c: ConcertStudentDTO) {
    this.navCtrl.push(ConcertdetailsPage, {concert: c});
  }


}
