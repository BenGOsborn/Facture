import { ManufacturerOpeningTimeType } from "@facture/types";

export function getYearsFromDate(date: Date) {
    return Math.floor((Date.now() - date.getTime()) / 3.154e10);
}

export function mappingToDay(id: number) {
    if (id === 0) return "Sunday";
    else if (id === 1) return "Monday";
    else if (id === 2) return "Tuesday";
    else if (id === 3) return "Wednesday";
    else if (id === 4) return "Thursday";
    else if (id === 5) return "Friday";
    else if (id === 6) return "Saturday";
    else throw Error("Invalid day id");
}

export function formatTime(time: string) {
    const date = new Date("1970-01-01 " + time);

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12;

    const minutesString = minutes < 10 ? "0" + minutes : minutes;

    return hours + ":" + minutesString + " " + ampm;
}

export function groupOpeningTime(openingTime: ManufacturerOpeningTimeType[]) {
    const out: { [key: number]: ManufacturerOpeningTimeType[] } = {};

    const sorted = [...openingTime];
    sorted.sort((a, b) => a.day - b.day);

    sorted.forEach((time) => (out[time.day] ? out[time.day].push(time) : (out[time.day] = [time])));

    return out;
}
