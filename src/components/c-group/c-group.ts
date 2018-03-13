import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Storage} from "@ionic/storage";
import {LessonServiceProvider} from "../../providers/lesson-service/lesson-service";
import {NavController} from "ionic-angular";
import {GroupServiceProvider} from "../../providers/group-service/group-service";
import {CalendarLessonDTO} from "../../model/calendarLesson";
import {GroupUserDTO} from "../../model/groupUser";
import {GroupDTO} from "../../model/group";
import {LessondetailsPage} from "../../pages/lessondetails/lessondetails";
import {GroupsPage} from "../../pages/groups/groups";

/**
 * Generated class for the CGroupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'c-group',
  templateUrl: 'c-group.html'
})
export class CGroupComponent implements OnInit{
  public groups: GroupDTO[];
  accordionExapanded = false;
  @ViewChild("cc") cardContent: any;

  icon: string = "arrow-forward";


  constructor(public navCtrl: NavController,public renderer: Renderer2, public storage: Storage,public groupServiceProvider: GroupServiceProvider,) {
    this.storage.get('Authorization').then((res) => {
      this.groupServiceProvider.getGroups(res)
        .subscribe( res => {
          this.groups = res;
          console.log('Inside subscribe');
          for (let group of this.groups) {
            console.log('Group ' + group.name + ' under teacher: ' + group.teacherEmail);
          }
        });
    });
  }
  ngOnInit() : void{
    console.log(this.cardContent.nativeElement);
    this.renderer.setStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
  }
  goToStudents(g: GroupDTO) {
    this.navCtrl.push(GroupsPage, {group: g});
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
