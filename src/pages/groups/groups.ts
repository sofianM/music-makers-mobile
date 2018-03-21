import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {GroupDTO} from "../../model/group";
import {GroupdetailsPage} from "../groupdetails/groupdetails";
import {GroupServiceProvider} from "../../providers/group-service/group-service";
import {Storage} from "@ionic/storage";
import { _ } from '@biesbjerg/ngx-translate-extract';
import {TranslateService} from "@ngx-translate/core";

/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {
  public groups: GroupDTO[];

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public navParams: NavParams,
              public storage: Storage,
              public groupServiceProvider: GroupServiceProvider,
              private translate: TranslateService) {
    let loading = this.loadingCtrl.create({
      // content: this.translate.get('groups.loadmessage').subscribe((res:string))
      content: 'Loading groups...'
    });
    loading.present();
    this.storage.get('Authorization').then((res) => {
      this.groupServiceProvider.getGroups(res)
        .subscribe( res => {
          this.groups = res;
          console.log('Inside subscribe');
          for (let group of this.groups) {
            console.log('Group ' + group.name + ' under teacher: ' + group.teacherEmail);
          }
        },
          error => console.log('GetGroupsError: ', error),
          () => loading.dismiss());
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsPage');
  }

  protected goToGroupDetails(group: GroupDTO){
    this.navCtrl.push(GroupdetailsPage, {group: group});
  }
}
