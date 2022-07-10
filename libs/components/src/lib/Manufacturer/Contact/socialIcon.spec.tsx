import { render } from "@testing-library/react";

import { SocialIcon } from "./socialIcon";

describe("social icon", () => {
    it("should render social icon", () => {
        const testData = {
            name: "facebook" as "facebook",
            link: "test-facebook",
        };

        const component = render(<SocialIcon {...testData} />);

        const link = component.getByRole(`social-${testData.name}`);

        expect(link.getAttribute("href")).toEqual(`/${testData.link}`);
    });
});
