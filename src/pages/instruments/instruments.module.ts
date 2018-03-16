import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstrumentsPage } from './instruments';

@NgModule({
  declarations: [
    InstrumentsPage,
  ],
  imports: [
    IonicPageModule.forChild(InstrumentsPage),
  ],
})
export class InstrumentsPageModule {}
