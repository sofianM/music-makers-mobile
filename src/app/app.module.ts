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

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    DashboardPage,
    LibraryPage,
    AgendaPage,
    GroupsPage
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
    AgendaPage,
    GroupsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServiceProvider,
    DatePicker
  ]
})
export class AppModule {
}
