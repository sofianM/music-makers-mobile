export class CalendarLessonDTO {
  id : number;
  name: string;
  startDates: CalendarLessonDate[];
  startTime: CalendarLessonTime;
  endTime: CalendarLessonTime;
  instrumentId: number;
  instrumentName: string;
  teacherId: number;
  teacherName: string;
  lessonTypeName: string;
}

export class CalendarLessonDate {
  year: number;
  month: string;
  monthValue: number;
  dayOfMonth: number;
  dayOfWeek: string;
  dayOfYear: number;
  leapYear: boolean;
  era: string;
  chronology: CalendarLessonDateChronology;

}

export class CalendarLessonDateChronology {
  calendarType: string;
  id: string;
}

export class CalendarLessonTime {
  hour: Number;
  minute: Number;
  second: Number;
  nano: Number;
}
