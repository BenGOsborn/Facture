import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Carousel } from "./";

describe("carousel", () => {
    it("should render a working carousel", async () => {
        render(<Carousel element={[<>Beginning</>, <>Middle</>, <>End</>]} shiftSize={1000} />);

        const view = screen.getByRole("carousel-view");
        const buttonLeft = screen.getByRole("carousel-button-left");
        const buttonRight = screen.getByRole("carousel-button-right");

        expect(view.textContent).toEqual("Beginning");

        fireEvent.click(buttonLeft);
        await waitFor(() => expect(view.textContent).toEqual("End"));

        fireEvent.click(buttonRight);
        fireEvent.click(buttonRight);
        await waitFor(() => expect(view.textContent).toEqual("Middle"));
    });
});
