import { render } from "@testing-library/react";
import { OpeningTime } from "./openingTime";

describe("opening time", () => {
    it("should render an opening time", () => {
        const component = render(<OpeningTime openingTime={[{ day: 0, openTime: "00:00", closeTime: "23:59" }]} />);

        const openingTimeLabel = component.getByRole("labelled-pair-label");
        const openingTime = component.getByRole("labelled-pair-item");

        expect(openingTimeLabel.textContent).toEqual("Sunday");
        expect(openingTime.textContent).toEqual("0:00 am - 11:59 pm");
    });

    it("should join multiple opening times for the same day", () => {
        const component = render(
            <OpeningTime
                openingTime={[
                    { day: 0, openTime: "00:00", closeTime: "23:59" },
                    { day: 0, openTime: "00:00", closeTime: "23:59" },
                ]}
            />
        );

        const openingTimeLabel = component.getByRole("labelled-pair-label");
        const openingTime = component.getByRole("labelled-pair-item");

        expect(openingTimeLabel.textContent).toEqual("Sunday");
        expect(openingTime.textContent).toEqual("0:00 am - 11:59 pm, 0:00 am - 11:59 pm");
    });
});
