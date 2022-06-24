import { render } from "@testing-library/react";
import { Phone } from "./phone";

describe("phone", () => {
    it("should render a phone pair", () => {
        const component = render(<Phone phone={[{ label: "test1", phoneNo: "1" }]} />);

        const phoneLabel = component.getByRole("labelled-pair-label");
        const phone = component.getByRole("labelled-pair-item");

        expect(phoneLabel.textContent).toEqual("test1");
        expect(phone.textContent).toEqual("1");
    });
});
