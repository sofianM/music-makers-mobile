import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlphaTabPage } from './alpha-tab';

@NgModule({
  declarations: [
    AlphaTabPage,
  ],
  imports: [
    IonicPageModule.forChild(AlphaTabPage),
  ],
})
export class AlphaTabPageModule {}
