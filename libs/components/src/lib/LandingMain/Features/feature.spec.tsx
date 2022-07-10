import { render } from "@testing-library/react";

import { Feature } from "./feature";

describe("feature", () => {
    it("should render a working feature", () => {
        const iconName = "Test icon";
        const testData = { description: "test 1 description", title: "test 1 title", icon: <>{iconName}</> };

        const component = render(<Feature {...testData} />);

        const featureIcon = component.getByRole("feature-icon");
        const featureTitle = component.getByRole("feature-title");
        const featureDescription = component.getByRole("feature-description");

        expect(featureIcon.textContent).toEqual(iconName);
        expect(featureTitle.textContent).toEqual(testData.title);
        expect(featureDescription.textContent).toEqual(testData.description);
    });
});
