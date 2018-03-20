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
import {LessondetailsPage} from "../pages/lessondetails/lessondetails";
import {UsersettingsPage} from "../pages/usersettings/usersettings";
import {CLessonComponent} from "../components/c-lesson/c-lesson";
import {CConcertComponent} from "../components/c-concert/c-concert";
import {GroupServiceProvider} from "../providers/group-service/group-service";
import { UserServiceProvider } from '../providers/user-service/user-service';
import {Camera} from "@ionic-native/camera";
import {Crop} from "@ionic-native/crop";
import {Base64} from "@ionic-native/base64";
import {ChangepasswordPage} from "../pages/changepassword/changepassword";
import {GroupdetailsPage} from "../pages/groupdetails/groupdetails";
import {CRepetitionComponent} from "../components/c-repetition/c-repetition";
import {RepetitiondetailsPage} from "../pages/repetitiondetails/repetitiondetails";
import {InstrumentsPage} from "../pages/instruments/instruments";
import { LibraryServiceProvider } from '../providers/library-service/library-service';
import {AlphaTabPage} from "../pages/alpha-tab/alpha-tab";
import { ConcertServiceProvider } from '../providers/concert-service/concert-service';
import {ConcertdetailsPage} from "../pages/concertdetails/concertdetails";

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
    ChangepasswordPage,
    GroupdetailsPage,
    RepetitiondetailsPage,
    ConcertdetailsPage,
    InstrumentsPage,
    CLessonComponent,
    CLessonComponent,
    CConcertComponent,
    CRepetitionComponent,
    AlphaTabPage
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
    UsersettingsPage,
    ChangepasswordPage,
    UsersettingsPage,
    GroupdetailsPage,
    RepetitiondetailsPage,
    InstrumentsPage,
    UsersettingsPage,
    AlphaTabPage,
    ConcertdetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServiceProvider,
    DatePicker,
    LessonServiceProvider,
    GroupServiceProvider,
    UserServiceProvider,
    Camera,
    Crop,
    Base64,
    LibraryServiceProvider,
    ConcertServiceProvider
  ]
})
export class AppModule {
}
