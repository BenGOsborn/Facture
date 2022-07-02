import { render, waitFor } from "@testing-library/react";
import { SearchHit } from "./searchHit";

describe("card", () => {
    it("should render a search hit", async () => {
        const component = render(
            <SearchHit
                hit={{
                    color: "indigo",
                    descriptionShort: "Test description",
                    logo: { url: "http://test-url-logo" },
                    manufacturer: "test-manufacturer",
                    name: "Test name",
                    thumbnail: { url: "http://test-url-thumbnail" },
                    type: ["test1", "test2"],
                    slogan: "Test slogan",
                }}
            />
        );

        const name = component.getByRole("search-hit-name");
        const slogan = component.getByRole("search-hit-slogan");
        const logo = component.getByRole("search-hit-logo");
        const description = component.getByRole("search-hit-description");

        expect(name.textContent).toEqual("Test name");
        expect(slogan.textContent).toEqual("Test slogan");
        await waitFor(() => expect(logo.getAttribute("src")).toContain("test-url-logo"));
        expect(description.textContent).toEqual("Test description");
    });
});
