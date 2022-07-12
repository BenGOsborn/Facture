import { render } from "@testing-library/react";

import { SocialIcon } from "./socialIcon";

describe("social icon", () => {
    it("should render social icon", () => {
        const testData = {
            name: "facebook" as const,
            link: "test-facebook",
            manufacturer: "test-manufacturer",
        };

        const component = render(<SocialIcon {...testData} />);

        const link = component.getByRole(`social-${testData.name}`);

        expect(link.getAttribute("href")).toEqual(`/${testData.link}`);
    });
});
