import { fireEvent, render, waitFor } from "@testing-library/react";
import { Carousel } from ".";

describe("carousel", () => {
    it("should render a working carousel", async () => {
        const component = render(<Carousel element={[<>Beginning</>, <>Middle</>, <>End</>]} shiftSize={1000} />);

        const view = component.getByRole("carousel-view");
        const buttonLeft = component.getByRole("carousel-button-left");
        const buttonRight = component.getByRole("carousel-button-right");

        expect(view.textContent).toEqual("Beginning");

        fireEvent.click(buttonLeft);
        await waitFor(() => expect(view.textContent).toEqual("End"));

        fireEvent.click(buttonRight);
        fireEvent.click(buttonRight);
        await waitFor(() => expect(view.textContent).toEqual("Middle"));
    });
});
