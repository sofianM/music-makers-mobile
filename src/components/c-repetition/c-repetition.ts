import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Storage} from "@ionic/storage";
import {StudentRepetitionDTO} from "../../model/group";
import {NavController} from "ionic-angular";
import {GroupServiceProvider} from "../../providers/group-service/group-service";
import {RepetitiondetailsPage} from "../../pages/repetitiondetails/repetitiondetails";

/**
 * Generated class for the CRepetitionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'c-repetition',
  templateUrl: 'c-repetition.html'
})
export class CRepetitionComponent implements OnInit{
  public repetitions: StudentRepetitionDTO[];
  accordionExpanded = false;
  @ViewChild('cc') cardContent: any;
  icon: string = "arrow-forward";



  text: string;

  constructor(public navCtrl: NavController,public renderer: Renderer2, public storage: Storage,public groupServiceProvider: GroupServiceProvider,) {
    this.storage.get('Authorization').then((res) => {
      this.groupServiceProvider.getRepetitions(res)
        .subscribe( res => {
          this.repetitions = res;
          console.log('Inside subscribe: ', res);
          for (let repetition of this.repetitions) {
            console.log('Repetition ' + repetition.id + ': ' + repetition.repetitioninfo);
          }
        });
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
  goToRepetitionCalendar(r: StudentRepetitionDTO) {
    this.navCtrl.push(RepetitiondetailsPage, {repetition: r});
  }

}
