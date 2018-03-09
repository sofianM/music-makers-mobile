import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginServiceProvider} from '../providers/login-service/login-service';
import {LoginPage} from "../pages/login/login";
import {HttpClientModule} from "@angular/common/http";
import {RegisterPage} from "../pages/register/register";
import {IonicStorageModule} from "@ionic/storage";
import {DatePicker} from "@ionic-native/date-picker";
import {DashboardPage} from "../pages/dashboard/dashboard";
import {LibraryPage} from "../pages/library/library";
import {GroupsPage} from "../pages/groups/groups";
import {AgendaPage} from "../pages/agenda/agenda";
import { LessonServiceProvider } from '../providers/lesson-service/lesson-service';
import { RegisterServiceProvider } from '../providers/register-service/register-service';
import {LessondetailsPage} from "../pages/lessondetails/lessondetails";
// import {CAg} from "../components/c-agenda/c-agenda";
import {UsersettingsPage} from "../pages/usersettings/usersettings";
import {CLessonComponent} from "../components/c-lesson/c-lesson";
import {CConcertComponent} from "../components/c-concert/c-concert";
import {CRehearsalComponent} from "../components/c-rehearsal/c-rehearsal";
import {CGroupComponent} from "../components/c-group/c-group";
import {GroupServiceProvider} from "../providers/group-service/group-service";
import { UserServiceProvider } from '../providers/user-service/user-service';
import {Camera} from "@ionic-native/camera";
import {Crop} from "@ionic-native/crop";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    DashboardPage,
    LibraryPage,
    GroupsPage,
    AgendaPage,
    LessondetailsPage,
    UsersettingsPage,
    CLessonComponent,
    CRehearsalComponent,
    CGroupComponent,
    // CAgendaComponent,
    CLessonComponent,
    CRehearsalComponent,
    CConcertComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    DashboardPage,
    LibraryPage,
    GroupsPage,
    AgendaPage,
    LessondetailsPage,
    UsersettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServiceProvider,
    DatePicker,
    LessonServiceProvider,
    RegisterServiceProvider,
    GroupServiceProvider,
    UserServiceProvider,
    Camera,
    Crop
  ]
})
export class AppModule {
}
