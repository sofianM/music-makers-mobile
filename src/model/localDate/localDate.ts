/**
 * Created by trege on 10/03/2018.
 */
export class LocalDate {
  chronology: Chronology;
  dayOfMonth: number;
  dayOfWeek: String;
  dayOfYear: number;
  era: String;
  leapYear: boolean;
  month: String;
  monthValue: number;
  year: number;

  constructor(json: LocalDate) {
    this.chronology = json.chronology;
    this.dayOfMonth = json.dayOfMonth;
    this.dayOfWeek = json.dayOfWeek;
    this.dayOfYear = json.dayOfYear;
    this.era = json.era;
    this.leapYear = json.leapYear;
    this.month = json.month;
    this.monthValue = json.monthValue;
    this.year = json.year;
  }

  public makeStr(): string {
    return this.dayOfMonth.toString() + '/' + this.monthValue.toString() + '/' + this.year.toString();
  }

  // this is before other when return < 0, if return == 0 then the two are the same
  // if return > 0 then this is after other
  public compare(other: LocalDate): number {
    const yearDifference = this.year - other.year;
    const monthDifference = this.monthValue - other.monthValue;
    const dayDifference = this.dayOfMonth - other.dayOfMonth;
    if (yearDifference === 0) {
      if (monthDifference === 0) {
        return dayDifference;
      }
      return monthDifference;
    }
    return yearDifference;
  }
}

export class Chronology {
  calendarType: String;
  id: String;
}
