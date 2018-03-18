import { NgModule } from '@angular/core';
import { CLessonComponent } from './c-lesson/c-lesson';
import { CConcertComponent } from './c-concert/c-concert';
import { CRepetitionComponent } from './c-repetition/c-repetition';
@NgModule({
	declarations: [
    CLessonComponent,
    CConcertComponent,
    CRepetitionComponent],
	imports: [],
	exports: [
    CLessonComponent,
    CConcertComponent,
    CRepetitionComponent]
})
export class ComponentsModule {}
