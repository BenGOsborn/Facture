import { render } from "@testing-library/react";

import { Features } from ".";

describe("features", () => {
    it("should render a list of features and content", () => {
        const component = render(
            <Features
                subheading="test subheading"
                heading="test heading"
                description="test description"
                features={[
                    { title: "title 1", description: "description 1", icon: <>icon 1</> },
                    { title: "title 2", description: "description 2", icon: <>icon 2</> },
                ]}
            />
        );

        const featuresSubheading = component.getByRole("features-subheading");
        const featuresHeading = component.getByRole("features-heading");
        const featuresDescription = component.getByRole("features-description");
        const featuresFeatures = component.getAllByRole("feature");

        expect(featuresSubheading.textContent).toEqual("test subheading");
        expect(featuresHeading.textContent).toEqual("test heading");
        expect(featuresDescription.textContent).toEqual("test description");
        expect(featuresFeatures.length).toEqual(2);
    });
});
