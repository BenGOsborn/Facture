import { render, waitFor } from "@testing-library/react";

import { SearchHit } from "./searchHit";

describe("search hit", () => {
    it("should render a search hit", async () => {
        const testData = {
            query: "",
            resultIndex: 0,
            totalResults: 1,
            hit: {
                color: "indigo" as "indigo",
                descriptionShort: "Test description",
                logo: { url: "http://test-url-logo" },
                manufacturer: "test-manufacturer",
                name: "Test name",
                thumbnail: { url: "http://test-url-thumbnail" },
                type: ["test1", "test2"],
                slogan: "Test slogan",
            },
        };

        const component = render(<SearchHit {...testData} />);

        const name = component.getByRole("search-hit-name");
        const slogan = component.getByRole("search-hit-slogan");
        const logo = component.getByRole("search-hit-logo");
        const description = component.getByRole("search-hit-description");

        expect(name.textContent).toEqual(testData.hit.name);
        expect(slogan.textContent).toEqual(testData.hit.slogan);
        await waitFor(() => expect(logo.getAttribute("src")).toContain(testData.hit.thumbnail.url.split("http://")[0]));
        expect(description.textContent).toEqual(testData.hit.descriptionShort);
    });
});
