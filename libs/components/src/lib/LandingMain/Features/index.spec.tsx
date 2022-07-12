import { render } from "@testing-library/react";

import { Features } from ".";

describe("features", () => {
    it("should render a list of features and content", () => {
        const testData = {
            subheading: "test subheading",
            heading: "test heading",
            description: "test description",
            features: [
                { title: "title 1", description: "description 1", icon: <>icon 1</> },
                { title: "title 2", description: "description 2", icon: <>icon 2</> },
            ],
        };

        const component = render(<Features {...testData} />);

        const landingHeading = component.getAllByRole("landing-heading");
        const featuresFeatures = component.getAllByRole("feature");

        expect(landingHeading.length).toEqual(1);
        expect(featuresFeatures.length).toEqual(2);
    });
});
