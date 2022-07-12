import { render } from "@testing-library/react";

import { LandingHeading } from "./index";

describe("landing heading", () => {
    it("should render a working landing heading", () => {
        const testData = { heading: "test heading", subheading: "test subheading", description: "test description" };

        const component = render(<LandingHeading {...testData} />);

        const subheading = component.getByRole("landing-heading-subheading");
        const heading = component.getByRole("landing-heading-heading");
        const description = component.getByRole("landing-heading-description");

        expect(subheading.textContent).toEqual(testData.subheading);
        expect(heading.textContent).toEqual(testData.heading);
        expect(description.textContent).toEqual(testData.description);
    });
});
