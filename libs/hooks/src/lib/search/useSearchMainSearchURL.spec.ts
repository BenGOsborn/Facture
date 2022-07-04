import { renderHook } from "@testing-library/react-hooks";

import { useSearchMainSearchURL } from "./useSearchMainSearchURL";

jest.mock("next/router", () => {
    const originalModule = jest.requireActual("next/router");

    return {
        __esModule: true,
        ...originalModule,
        useRouter: () => ({
            query: { search: encodeURI("test 1") },
        }),
    };
});

describe("use search main search url", () => {
    it("should return load the query from url and update the main query with it", async () => {
        const data = { query: "" };

        const setQuery = jest.fn((query: string) => (data.query = query));

        const { rerender } = renderHook(({ query, setQuery }) => useSearchMainSearchURL(query, setQuery), {
            initialProps: { query: "", setQuery },
        });

        expect(data.query).toEqual("test 1");

        expect(setQuery).toHaveBeenCalled();

        rerender({ query: "test 2", setQuery });
        expect(window.location.search).toEqual("?search=" + encodeURI("test 2"));

        rerender({ query: "", setQuery });
        expect(window.location.search).toEqual("");
    });
});
