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
  calendarRepititionDTOS: CalendarRepititionDTO[]
}
export class CalendarRepititionDTO{
  id: number;
  date: String;
  startTIme: String;
  endTime: String;
  repetitionInfo: String;
}
