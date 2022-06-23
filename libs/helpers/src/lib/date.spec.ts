import { formatTime, getYearsFromDate, mappingToDay } from "./date";

describe("date", () => {
    it("should parse a date correctly", () => {
        const currentDate = new Date("2020-01-01");

        jest.useFakeTimers().setSystemTime(currentDate);

        const checkDate = new Date("July 21, 1983 01:15:00");

        expect(getYearsFromDate(checkDate)).toEqual(36);
    });

    it("should map the number to the correct date", () => {
        expect(mappingToDay(0)).toEqual("Sunday");
        expect(mappingToDay(1)).toEqual("Monday");
        expect(mappingToDay(2)).toEqual("Tuesday");
        expect(mappingToDay(3)).toEqual("Wednesday");
        expect(mappingToDay(4)).toEqual("Thursday");
        expect(mappingToDay(5)).toEqual("Friday");
        expect(mappingToDay(6)).toEqual("Saturday");
    });

    it("should format the time correctly", () => {
        expect(formatTime("00:00:00.000")).toEqual("0:00 am");
        expect(formatTime("23:59:00.000")).toEqual("11:59 pm");
    });
});
