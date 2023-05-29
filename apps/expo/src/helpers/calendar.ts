import dayjs from "dayjs";

export interface DateObj {
  date: dayjs.Dayjs;
  isToday: boolean;
}

class Calendar {
  private year: number;
  private month: number;

  constructor() {
    this.year = dayjs().year();
    this.month = dayjs().month();
  }

  public generateDates(month = this.month, year = this.year): dayjs.Dayjs[] {
    const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
    const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

    const arrayOfDate = [];

    for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
      arrayOfDate.push(firstDateOfMonth.date(i));
    }

    return arrayOfDate;
  }

  public generateBarDates(): DateObj[] {
    const start = dayjs().subtract(20, "day");
    const end = dayjs().add(20, "day");

    const arrayOfDates: DateObj[] = [];

    let current = start;

    while (current.isBefore(end)) {
      arrayOfDates.push({ date: current, isToday: this.isToday(current) });
      current = current.add(1, "day");
    }

    return arrayOfDates;
  }

  private isToday(day: dayjs.Dayjs): boolean {
    return dayjs().toDate().toDateString() === day.toDate().toDateString();
  }

  public getExpirationDateForChallenge(challengeDuration: number): dayjs.Dayjs {
    return dayjs().add(challengeDuration, "day");
  }
}

export const calendarHelper = new Calendar();
