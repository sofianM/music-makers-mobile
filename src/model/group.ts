import {GroupUserDTO} from "./groupUser";

export class GroupDTO {
  id: number;
  name: String;
  teacherEmail: String;
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

export class CalendarRepetitionDate {
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
}

export class CalendarRepetitionTime {
  hour: Number;
  minute: Number;
  second: Number;
  nano: Number;
}
