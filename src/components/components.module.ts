import { NgModule } from '@angular/core';
import { CLessonComponent } from './c-lesson/c-lesson';
import { CConcertComponent } from './c-concert/c-concert';
import { CGroupComponent } from './c-group/c-group';
import { CRepititionComponent } from './c-repitition/c-repitition';
@NgModule({
	declarations: [
    CLessonComponent,
    CConcertComponent,
    CGroupComponent,
    CRepititionComponent,
    CRepititionComponent],
	imports: [],
	exports: [
    CLessonComponent,
    CConcertComponent,
    CGroupComponent,
    CRepititionComponent,
    CRepititionComponent]
})
export class ComponentsModule {}
