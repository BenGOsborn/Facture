import { renderHook } from "@testing-library/react-hooks";

import { useSearchMainSearchURL } from "./useSearchMainSearchURL";

const initialQuery = "test 1";

jest.mock("next/router", () => {
    const originalModule = jest.requireActual("next/router");

    return {
        __esModule: true,
        ...originalModule,
        useRouter: () => ({
            query: { q: encodeURI(initialQuery) },
        }),
    };
});

describe("use search main search url", () => {
    it("should return load the query from url and update the main query with it", async () => {
        const data = { query: "" };
        const setQuery = jest.fn((query: string) => (data.query = query));

        const testData = [
            { query: "", setQuery },
            { query: "test 2", setQuery },
        ];

        const { rerender } = renderHook(({ query, setQuery }) => useSearchMainSearchURL(query, setQuery), {
            initialProps: testData[0],
        });

        expect(data.query).toEqual(initialQuery);

        expect(setQuery).toHaveBeenCalled();

        rerender(testData[1]);
        expect(window.location.search).toEqual("?q=" + encodeURI(testData[1].query));

        rerender(testData[0]);
        expect(window.location.search).toEqual(testData[0].query);
    });
});
