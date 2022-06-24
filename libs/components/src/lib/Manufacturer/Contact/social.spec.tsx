import { render } from "@testing-library/react";
import { Social } from "./social";

describe("social", () => {
    it("should render a list of social icons", () => {
        const component = render(
            <Social
                social={[
                    { link: "test1", platform: "facebook" },
                    { link: "test2", platform: "website" },
                ]}
            />
        );

        const fb = component.getByRole("social-facebook");
        const website = component.getByRole("social-website");

        expect(fb.getAttribute("href")).toEqual("/test1");
        expect(website.getAttribute("href")).toEqual("/test2");
    });
});
