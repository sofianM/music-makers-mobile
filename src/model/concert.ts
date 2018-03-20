/*export class ConcertDTO {
  id: number;
  date: ConcertDate;
  time: ConcertTime;
  concertInfo: String;
  students: GroupUserDTO[];
}
export class StudentRepetitionDTO{
  id: number;
  repetitioninfo: String;
  calendarRepetitionDTOS: CalendarRepetitionDTO[]
}
export class CalendarRepetitionDTO{
  id: number;
  date: CalendarRepetitionDate;
  startTime: CalendarRepetitionTime;
  endTime: CalendarRepetitionTime;
  repetitioninfo: String;
}

export class ConcertDate {
  year: number;
  month: string;
  monthValue: number;
  dayOfMonth: number;
  dayOfWeek: string;
  dayOfYear: number;
  leapYear: boolean;
  era: string;
  chronology: CalendarRepetitionDateChronology;

}

export class CalendarRepetitionDateChronology {
  calendarType: string;
  id: string;
}*/

import {GroupDTO} from "./group";

export class ConcertStudentDTO{
  id: number;
  date: ConcertDate;
  time: ConcertTime;
  concertInfo: string;
  studentgroups: GroupDTO[];
}
export class ConcertDate {
  year: number;
  month: string;
  monthValue: number;
  dayOfMonth: number;
  dayOfWeek: string;
  dayOfYear: number;
  leapYear: boolean;
  era: string;
  chronology: ConcertDateChronology;

}

export class ConcertDateChronology {
  calendarType: string;
  id: string;
}
export class ConcertTime {
  hour: Number;
  minute: Number;
  second: Number;
  nano: Number;
}
