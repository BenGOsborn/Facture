import { render } from "@testing-library/react";

import { Content } from ".";

describe("content", () => {
    it("should render a list of cards", () => {
        const component = render(
            <Content
                data={[
                    {
                        color: "amber",
                        descriptionShort: "",
                        logo: { url: "http://test-logo-1" },
                        manufacturer: "",
                        name: "",
                        thumbnail: { url: "http://test-thumbnail-1" },
                        type: [],
                    },
                    {
                        color: "amber",
                        descriptionShort: "",
                        logo: { url: "http://test-logo-2" },
                        manufacturer: "",
                        name: "",
                        thumbnail: { url: "http://test-thumbnail-2" },
                        type: [],
                    },
                ]}
            />
        );

        const card = component.getAllByRole("card");

        expect(card.length).toEqual(2);
    });
});
