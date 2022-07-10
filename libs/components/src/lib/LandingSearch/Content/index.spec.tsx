import { render } from "@testing-library/react";

import { Content } from ".";

describe("content", () => {
    it("should render a list of cards", () => {
        const testData = {
            query: "",
            data: [
                {
                    color: "amber" as "amber",
                    descriptionShort: "",
                    logo: { url: "http://test-logo-1" },
                    manufacturer: "",
                    name: "",
                    thumbnail: { url: "http://test-thumbnail-1" },
                    type: [],
                    slogan: null,
                },
                {
                    color: "amber" as "amber",
                    descriptionShort: "",
                    logo: { url: "http://test-logo-2" },
                    manufacturer: "",
                    name: "",
                    thumbnail: { url: "http://test-thumbnail-2" },
                    type: [],
                    slogan: null,
                },
            ],
        };

        const component = render(<Content {...testData} />);

        const card = component.getAllByRole("landing-search-card");

        expect(card.length).toEqual(testData.data.length);
    });
});
