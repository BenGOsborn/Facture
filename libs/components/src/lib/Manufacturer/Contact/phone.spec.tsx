import { render } from "@testing-library/react";

import { Phone } from "./phone";

describe("phone", () => {
    it("should render a phone pair", () => {
        const testData = {
            phone: [{ label: "test1", phoneNo: "1" }],
        };

        const component = render(<Phone {...testData} />);

        const phoneLabel = component.getByRole("labelled-pair-label");
        const phone = component.getByRole("labelled-pair-item");

        expect(phoneLabel.textContent).toEqual(testData.phone[0].label);
        expect(phone.textContent).toEqual(testData.phone[0].phoneNo);
    });
});
