import { render } from "@testing-library/react";

import { Email } from "./email";

describe("email", () => {
    it("should render an email pair", () => {
        const testData = {
            email: [{ label: "test-label", email: "test-email" }],
        };

        const component = render(<Email {...testData} />);

        const emailLabel = component.getByRole("labelled-pair-label");
        const email = component.getByRole("labelled-pair-item");

        expect(emailLabel.textContent).toEqual(testData.email[0].label);
        expect(email.textContent).toEqual(testData.email[0].email);
    });
});
