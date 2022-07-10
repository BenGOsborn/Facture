import { render } from "@testing-library/react";

import { Fax } from "./fax";

describe("fax", () => {
    it("should render a fax pair", () => {
        const testData = {
            fax: [{ label: "test-fax", fax: "fax-1" }],
        };

        const component = render(<Fax {...testData} />);

        const faxLabel = component.getByRole("labelled-pair-label");
        const fax = component.getByRole("labelled-pair-item");

        expect(faxLabel.textContent).toEqual(testData.fax[0].label);
        expect(fax.textContent).toEqual(testData.fax[0].fax);
    });
});
