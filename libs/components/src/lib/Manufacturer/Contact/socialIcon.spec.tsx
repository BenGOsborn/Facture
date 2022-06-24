import { render } from "@testing-library/react";
import { SocialIcon } from "./socialIcon";

describe("social icon", () => {
    it("should render social icon", () => {
        const component = render(<SocialIcon name="facebook" link="test-facebook" />);

        const link = component.getByRole("social-facebook");

        expect(link.getAttribute("href")).toEqual("/test-facebook");
    });
});
