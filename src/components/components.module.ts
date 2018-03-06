import { NgModule } from '@angular/core';
import { CAgendaComponent } from './c-agenda/c-agenda';
import { CLessonComponent } from './c-lesson/c-lesson';
import { CConcertComponent } from './c-concert/c-concert';
import { CRehearsalComponent } from './c-rehearsal/c-rehearsal';
@NgModule({
	declarations: [CAgendaComponent,
    CLessonComponent,
    CConcertComponent,
    CRehearsalComponent],
	imports: [],
	exports: [CAgendaComponent,
    CLessonComponent,
    CConcertComponent,
    CRehearsalComponent]
})
export class ComponentsModule {}
