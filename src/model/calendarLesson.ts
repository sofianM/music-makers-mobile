export class CalendarLessonDTO {
  id : Number;
  name: String;
  startDates: CalendarLessonDate[];
  startTime: CalendarLessonTime;
  endTime: CalendarLessonTime;
  instrumentId: Number;
  instrumentName: String;
  teacherId: Number;
  teacherName: String;
  lessonTypeName: String;
}

export class CalendarLessonDate {
  year: Number;
  month: String;
  monthValue: Number;
  dayOfMonth: Number;
  dayOfWeek: String;
  dayOfYear: Number;
  leapYear: Boolean;
  era: String;
  chronology: CalendarLessonDateChronology;

}

export class CalendarLessonDateChronology {
  calendarType: String;
  id: String;
}

export class CalendarLessonTime {
  hour: Number;
  minute: Number;
  second: Number;
  nano: Number;
}
