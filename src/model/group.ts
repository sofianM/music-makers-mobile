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
  date: String;
  startTime: String;
  endTime: String;
  repetitionInfo: String;
}
