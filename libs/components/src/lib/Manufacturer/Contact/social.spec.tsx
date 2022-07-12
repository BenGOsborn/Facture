import { render } from "@testing-library/react";
import { Social } from "./social";

describe("social", () => {
    it("should render a list of social icons", () => {
        const testData = {
            social: [
                { link: "test1", platform: "facebook" as const },
                { link: "test2", platform: "website" as const },
            ],
            manufacturer: "test-manufacturer",
        };

        const component = render(<Social {...testData} />);

        const social1 = component.getByRole(`social-${testData.social[0].platform}`);
        const social2 = component.getByRole(`social-${testData.social[1].platform}`);

        expect(social1.getAttribute("href")).toEqual(`/${testData.social[0].link}`);
        expect(social2.getAttribute("href")).toEqual(`/${testData.social[1].link}`);
    });
});
