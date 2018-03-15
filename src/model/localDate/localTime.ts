/**
 * Created by trege on 13/03/2018.
 */
export class LocalTime {
  hour: number;
  minute: number;
  second: number;
  nano: number;

  constructor(json: LocalTime) {
    this.hour = json.hour;
    this.minute = json.minute;
    this.second = json.second;
    this.nano = json.nano;
  }

  public makeStr(): string {
    const result: string = this.hour + ':';
    if (this.minute < 10) {
      return result + '0' + this.minute;
    }
    return result + this.minute;
  }

  public compare(other: LocalTime): number {
    const hourDifference: number = this.hour - other.hour;
    const minuteDifference: number = this.minute - other.hour;
    if (hourDifference === 0) {
      return minuteDifference;
    }
    return hourDifference;
  }
}
