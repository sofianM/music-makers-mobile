import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LessondetailsPage } from './lessondetails';

@NgModule({
  declarations: [
    LessondetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LessondetailsPage),
  ],
})
export class LessondetailsPageModule {}
