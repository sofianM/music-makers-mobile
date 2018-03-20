import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConcertdetailsPage } from './concertdetails';

@NgModule({
  declarations: [
    ConcertdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConcertdetailsPage),
  ],
})
export class ConcertdetailsPageModule {}
