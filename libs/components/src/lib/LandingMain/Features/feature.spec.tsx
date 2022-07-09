import { render } from "@testing-library/react";

import { Feature } from "./feature";

describe("feature", () => {
    it("should render a feature", () => {
        const component = render(<Feature description="test 1 description" title="test 1 title" icon={<>Test icon</>} />);

        const featureIcon = component.getByRole("feature-icon");
        const featureTitle = component.getByRole("feature-title");
        const featureDescription = component.getByRole("feature-description");

        expect(featureIcon.textContent).toEqual("Test icon");
        expect(featureTitle.textContent).toEqual("test 1 title");
        expect(featureDescription.textContent).toEqual("test 1 description");
    });
});
