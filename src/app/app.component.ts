import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {DashboardPage} from "../pages/dashboard/dashboard";
import {LibraryPage} from "../pages/library/library";
import {AgendaPage} from "../pages/agenda/agenda";
import {GroupsPage} from "../pages/groups/groups";
import {Storage} from "@ionic/storage";
<<<<<<< HEAD
import {LessondetailsPage} from "../pages/lessondetails/lessondetails";
=======
import {UsersettingsPage} from "../pages/usersettings/usersettings";
>>>>>>> 2f8b3b83bec4ef81cde5806cc76195d9d73e9555


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public rootPage;


  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storage: Storage
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Dashboard', component: DashboardPage},
      { title: 'Library', component: LibraryPage},
      { title: 'Agenda', component: AgendaPage},
      { title: 'Groups', component: GroupsPage}
    ];

    this.storage.get('Authorization').then(loggedIn => {
      // this.rootPage = loggedIn ? DashboardPage : LoginPage;
      this.rootPage = loggedIn ? AgendaPage : LoginPage;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.push(page.component);
  }

  public logout() {
    this.storage.remove('Authorization');
    this.menu.close();
    this.nav.setRoot(LoginPage);
  }

  goToUserSettings() {
    this.menu.close();
    this.nav.push(UsersettingsPage);
  }
}
