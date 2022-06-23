import { formatTime, getYearsFromDate, groupOpeningTime, mappingToDay } from "./date";

describe("date", () => {
    it("should parse a date correctly", () => {
        jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));

        expect(getYearsFromDate(new Date("July 21, 1983 01:15:00"))).toEqual(36);
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

    it("should group the opening times", () => {
        const out = groupOpeningTime([
            { day: 0, openTime: "00:00:00.000", closeTime: "23:59:00.000" },
            { day: 0, openTime: "00:00:00.000", closeTime: "23:59:00.000" },
            { day: 1, openTime: "00:00:00.000", closeTime: "23:59:00.000" },
        ]);

        const expected = {
            0: [
                { day: 0, openTime: "00:00:00.000", closeTime: "23:59:00.000" },
                { day: 0, openTime: "00:00:00.000", closeTime: "23:59:00.000" },
            ],
            1: [{ day: 1, openTime: "00:00:00.000", closeTime: "23:59:00.000" }],
        };

        expect(out).toEqual(expected);
    });
});
