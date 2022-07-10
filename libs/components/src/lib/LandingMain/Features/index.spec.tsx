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

        const featuresSubheading = component.getByRole("features-subheading");
        const featuresHeading = component.getByRole("features-heading");
        const featuresDescription = component.getByRole("features-description");
        const featuresFeatures = component.getAllByRole("feature");

        expect(featuresSubheading.textContent).toEqual(testData.subheading);
        expect(featuresHeading.textContent).toEqual(testData.heading);
        expect(featuresDescription.textContent).toEqual(testData.description);
        expect(featuresFeatures.length).toEqual(2);
    });
});
