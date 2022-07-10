import { render } from "@testing-library/react";
import { OpeningTime } from "./openingTime";

describe("opening time", () => {
    it("should render an opening time", () => {
        const day = "Sunday";
        const expectedDisplay = "0:00 am - 11:59 pm";
        const testData = {
            openingTime: [{ day: 0, openTime: "00:00", closeTime: "23:59" }],
        };

        const component = render(<OpeningTime {...testData} />);

        const openingTimeLabel = component.getByRole("labelled-pair-label");
        const openingTime = component.getByRole("labelled-pair-item");

        expect(openingTimeLabel.textContent).toEqual(day);
        expect(openingTime.textContent).toEqual(expectedDisplay);
    });

    it("should join multiple opening times for the same day", () => {
        const day = "Sunday";
        const expectedDisplay = "0:00 am - 11:59 pm, 0:00 am - 11:59 pm";
        const testData = {
            openingTime: [
                { day: 0, openTime: "00:00", closeTime: "23:59" },
                { day: 0, openTime: "00:00", closeTime: "23:59" },
            ],
        };

        const component = render(<OpeningTime {...testData} />);

        const openingTimeLabel = component.getByRole("labelled-pair-label");
        const openingTime = component.getByRole("labelled-pair-item");

        expect(openingTimeLabel.textContent).toEqual(day);
        expect(openingTime.textContent).toEqual(expectedDisplay);
    });
});
