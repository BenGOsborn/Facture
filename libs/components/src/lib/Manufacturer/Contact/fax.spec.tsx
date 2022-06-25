import { render } from "@testing-library/react";
import { Fax } from "./fax";

describe("fax", () => {
    it("should render a fax pair", () => {
        const component = render(<Fax fax={[{ label: "test1", fax: "1" }]} />);

        const faxLabel = component.getByRole("labelled-pair-label");
        const fax = component.getByRole("labelled-pair-item");

        expect(faxLabel.textContent).toEqual("test1");
        expect(fax.textContent).toEqual("1");
    });
});
