import { render } from "@testing-library/react";
import { Email } from "./email";

describe("email", () => {
    it("should render an email pair", () => {
        const component = render(<Email email={[{ label: "test1", email: "1" }]} />);

        const emailLabel = component.getByRole("labelled-pair-label");
        const email = component.getByRole("labelled-pair-item");

        expect(emailLabel.textContent).toEqual("test1");
        expect(email.textContent).toEqual("1");
    });
});
