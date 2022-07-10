import { render, waitFor } from "@testing-library/react";

import { Card } from "./card";

describe("card", () => {
    it("should render a card", async () => {
        const testData = {
            resultIndex: 0,
            query: "",
            totalResults: 1,
            hit: {
                color: "indigo" as const,
                descriptionShort: "Test description",
                logo: { url: "http://test-url-logo" },
                manufacturer: "test-manufacturer",
                name: "Test name",
                thumbnail: { url: "http://test-url-thumbnail" },
                type: ["test1", "test2"],
                slogan: "Test slogan",
            },
        };

        const component = render(<Card {...testData} />);

        const thumbnail = component.getByRole("landing-search-card-thumbnail");
        const name = component.getByRole("landing-search-card-name");
        const slogan = component.getByRole("landing-search-card-slogan");
        const logo = component.getByRole("landing-search-card-logo");
        const description = component.getByRole("landing-search-card-description");

        await waitFor(() => expect(thumbnail.getAttribute("src")).toContain(testData.hit.thumbnail.url.split("http://")[0]));
        expect(name.textContent).toEqual(testData.hit.name);
        expect(slogan.textContent).toEqual(testData.hit.slogan);
        await waitFor(() => expect(logo.getAttribute("src")).toContain(testData.hit.logo.url.split("http://")[0]));
        expect(description.textContent).toEqual(testData.hit.descriptionShort);
    });
});
