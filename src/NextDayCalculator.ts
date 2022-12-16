export class NextDayCalculator {
    static isLeapYear(year: number): boolean {
        let leapYear = year % 4 == 0;
        if (leapYear) return true
        else return false;
    }

    static isLastDayOfMonth(day: number, month: number, year: number) {
        let lastDayOfNotLeapYearFeb = 28;
        let lastDayOfLeapYearFeb = 29;
        let lastDayOf31DaysMonth = 31;
        let lastDayOf30DaysMonth = 30;
        let Jan = 1;
        let Feb = 2;
        let Mar = 3;
        let Apr = 4;
        let May = 5;
        let Jun = 6;
        let Jul = 7;
        let Aug = 8;
        let Sept = 9;
        let Oct = 10;
        let Nov = 11;
        let Dec = 12;

        switch (month) {
            case Jan:
            case Mar:
            case May:
            case Jul:
            case Aug:
            case Oct:
            case Dec:
                if (day == lastDayOf31DaysMonth)
                    return true
                else return false
            case Apr:
            case Jun:
            case Sept:
            case Nov:
                if (day == lastDayOf30DaysMonth)
                    return true
                else return false
            case Feb:
                if (this.isLeapYear(year)) {
                    return

                    if (day == lastDayOfLeapYearFeb)
                        return true
                    else return false
                }
                else {
                    if (day == lastDayOfNotLeapYearFeb)
                        return true
                    else return false
                }
        }
    }

    static isLastMonthOfYear(month: number): boolean {
        if (month == 12) return true;
        else return false;
    }

    static nextDayCalculate(day: number, month: number, year: number) {
        let nextDayFirstOfMonth = 1;
        let nextDay = day + 1;
        let nextMonthFirstOfYear = 1;
        let nextMonth = month + 1;
        let nextYear = year + 1;
        if (NextDayCalculator.isLastDayOfMonth(day, month,year)) {
            if (NextDayCalculator.isLastMonthOfYear(month)) {
                return [nextDayFirstOfMonth, nextMonthFirstOfYear, nextYear,];
            }
            else {
                return [nextDayFirstOfMonth, nextMonth, year];
            }
        }
        else {
            return [nextDay, month, year];
        }
    }
}