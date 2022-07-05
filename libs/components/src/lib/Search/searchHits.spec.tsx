import { render } from "@testing-library/react";
import { SearchHits } from "./searchHits";

describe("search hits", () => {
    it("should render a list of search hits", () => {
        const component = render(
            <SearchHits
                query=""
                hits={[
                    {
                        color: "amber",
                        descriptionShort: "",
                        logo: { url: "http://test-logo-1" },
                        manufacturer: "",
                        name: "",
                        thumbnail: { url: "http://test-thumbnail-1" },
                        type: [],
                        slogan: null,
                    },
                    {
                        color: "amber",
                        descriptionShort: "",
                        logo: { url: "http://test-logo-2" },
                        manufacturer: "",
                        name: "",
                        thumbnail: { url: "http://test-thumbnail-2" },
                        type: [],
                        slogan: null,
                    },
                ]}
            />
        );

        const searchHit = component.getAllByRole("search-hit");

        expect(searchHit.length).toEqual(2);
    });
});
