import { NgModule } from '@angular/core';
import { CLessonComponent } from './c-lesson/c-lesson';
import { CConcertComponent } from './c-concert/c-concert';
import { CRehearsalComponent } from './c-rehearsal/c-rehearsal';
import { CGroupComponent } from './c-group/c-group';
@NgModule({
	declarations: [
    CLessonComponent,
    CConcertComponent,
    CRehearsalComponent,
    CGroupComponent],
	imports: [],
	exports: [
    CLessonComponent,
    CConcertComponent,
    CRehearsalComponent,
    CGroupComponent]
})
export class ComponentsModule {}
