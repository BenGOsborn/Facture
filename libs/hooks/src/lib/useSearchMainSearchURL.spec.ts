import { renderHook } from "@testing-library/react-hooks";

import { useSearchMainSearchURL } from "./useSearchMainSearchURL";

jest.mock("next/router", () => {
    const originalModule = jest.requireActual("next/router");

    return {
        __esModule: true,
        ...originalModule,
        useRouter: () => ({
            query: { search: "test 1" },
        }),
    };
});

describe("use search main search url", () => {
    it("should return load the query from url and update the main query with it", async () => {
        const setQuery = jest.fn((query: string) => {});

        const { rerender } = renderHook(({ query, setQuery }) => useSearchMainSearchURL(query, setQuery), {
            initialProps: { query: "", setQuery },
        });

        expect(setQuery).toHaveBeenCalled();

        rerender({ query: "test 2", setQuery });
        expect(window.location.search).toEqual("?search=" + encodeURI("test 2"));

        rerender({ query: "", setQuery });
        expect(window.location.search).toEqual("");
    });
});
