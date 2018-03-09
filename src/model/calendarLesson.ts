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
<<<<<<< HEAD
  hour: Number;
  minute: String;
  second: Number;
  nano: Number;
=======
  hour: number;
  minute: number;
  second: number;
  nano: number;
>>>>>>> 2f8b3b83bec4ef81cde5806cc76195d9d73e9555
}
