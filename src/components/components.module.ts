import { NgModule } from '@angular/core';
import { CLessonComponent } from './c-lesson/c-lesson';
import { CConcertComponent } from './c-concert/c-concert';
import { CRehearsalComponent } from './c-rehearsal/c-rehearsal';
@NgModule({
	declarations: [
    CLessonComponent,
    CConcertComponent,
    CRehearsalComponent],
	imports: [],
	exports: [
    CLessonComponent,
    CConcertComponent,
    CRehearsalComponent]
})
export class ComponentsModule {}
