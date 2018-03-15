import {Time} from "@angular/common";
import {LocalDate} from './localDate/localDate';
import {LocalTime} from './localDate/localTime';

export class CalendarLessonDTO {
  id: Number;
  name: String;
  startDates: LocalDate[];
  startTime: LocalTime;
  endTime: LocalTime;
  instrumentId: Number;
  instrumentName: String;
  teacherId: Number;
  teacherName: String;
  lessonTypeName: String;
  description: String;
}

export class SingleCalenderLesson {
  id: Number;
  name: String;
  startTime: LocalTime;
  endTime: LocalTime;
  instrumentId: Number;
  instrumentName: String;
  teacherId: Number;
  teacherName: String;
  lessonTypeName: String;
  description: String;

  constructor(lesson: CalendarLessonDTO) {
    this.id = lesson.id;
    this.name = lesson.name;
    this.startTime = new LocalTime(lesson.startTime);
    this.endTime = new LocalTime(lesson.endTime);
    this.instrumentId = lesson.instrumentId;
    this.instrumentName = lesson.instrumentName;
    this.teacherId = lesson.teacherId;
    this.teacherName = lesson.teacherName;
    this.lessonTypeName = lesson.lessonTypeName;
    this.description = lesson.description;
  }
}

export class LessonCalendarDictionary {
  private items: LessonCalendarDictionaryItem[];

  constructor() {
    this.items = [];
  }

  public put(key: LocalDate, value: SingleCalenderLesson) {
    let found = false;
    for (const item of this.items) {
      if (item.keyEquals(new LocalDate(key))) {
        item.push(value);
        found = true;
      }
    }
    if (!found) {
      this.items.push(new LessonCalendarDictionaryItem(new LocalDate(key), [value]));
      this.items = this.items.sort(this.comparator);
    }
  }

  public get(key: LocalDate): SingleCalenderLesson[] {
    for (const item of this.items) {
      if (item.keyEquals(key)) {
        return item.getValue();
      }
    }
    return null;
  }

  public getKeys(): LocalDate[] {
    const keys: LocalDate[] = [];
    for (const item of this.items) {
      keys.push(item.getKey());
    }
    return keys;
  }

  public size(): number {
    return this.items.length;
  }

  private comparator(a: LessonCalendarDictionaryItem, b: LessonCalendarDictionaryItem): number {
    return a.getKey().compare(b.getKey());
  }
}

export class LessonCalendarDictionaryItem {
  private key: LocalDate;
  private value: SingleCalenderLesson[];

  constructor(key: LocalDate, value: SingleCalenderLesson[]) {
    this.key = key;
    this.value = value;
  }

  public keyEquals(otherKey: LocalDate): boolean {
    return this.key.compare(otherKey) === 0;
  }

  public getValue(): SingleCalenderLesson[] {
    return this.value;
  }

  public push(value: SingleCalenderLesson) {
    this.value.push(value);
    this.value = this.value.sort(this.comparator);
  }

  public getKey() {
    return this.key;
  }

  private comparator(a: SingleCalenderLesson, b: SingleCalenderLesson): number {
    return a.startTime.compare(b.startTime);
  }
}
