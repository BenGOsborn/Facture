import { render } from "@testing-library/react";

import { Features } from ".";

describe("features", () => {
    it("should render a list of features and content", () => {
        const component = render(<Features />);

        // **** We need to check the length
        // **** We need to check the description and the text and the items
    });
});
