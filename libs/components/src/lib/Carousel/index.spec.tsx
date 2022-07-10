import { fireEvent, render, waitFor } from "@testing-library/react";

import { Carousel } from ".";

describe("carousel", () => {
    it("should render a working carousel", async () => {
        const carouselNames = ["Beginning", "Middle", "End"];
        const testData = {
            element: [<>{carouselNames[0]}</>, <>{carouselNames[1]}</>, <>{carouselNames[2]}</>],
            shiftSize: 1000,
        };

        const component = render(<Carousel {...testData} />);

        const view = component.getByRole("carousel-view");
        const buttonLeft = component.getByRole("carousel-button-left");
        const buttonRight = component.getByRole("carousel-button-right");

        expect(view.textContent).toEqual(carouselNames[0]);

        fireEvent.click(buttonLeft);
        await waitFor(() => expect(view.textContent).toEqual(carouselNames[2]));

        fireEvent.click(buttonRight);
        fireEvent.click(buttonRight);
        await waitFor(() => expect(view.textContent).toEqual(carouselNames[1]));
    });
});
