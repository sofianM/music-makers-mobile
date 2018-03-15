import { NgModule } from '@angular/core';
import { CLessonComponent } from './c-lesson/c-lesson';
import { CConcertComponent } from './c-concert/c-concert';
import { CGroupComponent } from './c-group/c-group';
import { CRepetitionComponent } from './c-repetition/c-repetition';
@NgModule({
	declarations: [
    CLessonComponent,
    CConcertComponent,
    CGroupComponent,
    CRepetitionComponent],
	imports: [],
	exports: [
    CLessonComponent,
    CConcertComponent,
    CGroupComponent,
    CRepetitionComponent]
})
export class ComponentsModule {}
