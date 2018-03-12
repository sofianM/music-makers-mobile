import {GroupUserDTO} from "./groupUser";

export class GroupDTO {
  id: number;
  name: String;
  teacherEmail: String;
  students: GroupUserDTO[];
}
