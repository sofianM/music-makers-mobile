import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {CalendarLessonDTO} from "../../model/calendarLesson";
import {CalendarRepititionDTO, StudentRepetitionDTO} from "../../model/group";
import {NavController} from "ionic-angular";
import {LessonServiceProvider} from "../../providers/lesson-service/lesson-service";
import {Storage} from "@ionic/storage";
import {GroupServiceProvider} from "../../providers/group-service/group-service";
import {LessondetailsPage} from "../../pages/lessondetails/lessondetails";
import {RepititiondetailsPage} from "../../pages/repititiondetails/repititiondetails";

/**
 * Generated class for the CRepititionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'c-repitition',
  templateUrl: 'c-repitition.html'
})
export class CRepititionComponent implements OnInit{
  public repititions: StudentRepetitionDTO[];
  accordionExapanded = false;
  @ViewChild("cc") cardContent: any;
  icon: string = "arrow-forward";



  text: string;

  constructor(public navCtrl: NavController,public renderer: Renderer2, public storage: Storage,public groupServiceProvider: GroupServiceProvider,) {
    this.storage.get('Authorization').then((res) => {
      this.groupServiceProvider.getRepetitions(res)
        .subscribe( res => {
          this.repititions = res;
          console.log('Inside subscribe: ', res);
          for (let repitition of this.repititions) {
            console.log('Repitition ' + repitition.id + ': ' + repitition.repetitioninfo);
          }
        });
    });
  }
  ngOnInit(): void {
    console.log(this.cardContent.nativeElement);
    this.renderer.setStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
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
  goToRepititionCalendar(r: StudentRepetitionDTO) {
    this.navCtrl.push(RepititiondetailsPage, {repitition: r});
  }

}
