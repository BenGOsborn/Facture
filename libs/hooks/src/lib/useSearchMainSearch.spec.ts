import { renderHook, act } from "@testing-library/react-hooks";
import { useSearchMainSearch } from "./useSearchMainSearch";

jest.mock("algoliasearch", () => ({
    default: (algoliaAppId: string, algoliaApiKey: string) => {
        return {
            initIndex: (algoliaIndexName: string) => {
                return {
                    search: (query: string, options: { hitsPerPage: number; page: number }) => {
                        if (query === "") return new Promise<{ hits: string[] }>((resolve) => resolve({ hits: [] }));
                        else if (query === "test" && options.page === 0) return new Promise<{ hits: string[] }>((resolve) => resolve({ hits: ["part 1"] }));
                        else if (query === "test" && options.page === 1) return new Promise<{ hits: string[] }>((resolve) => resolve({ hits: ["part 2"] }));

                        return new Promise<{ hits: string[] }>((resolve) => resolve({ hits: ["else"] }));
                    },
                };
            },
        };
    },
}));

describe("use search main search", () => {
    it("should return hits according to the query", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useSearchMainSearch("", "", "", 1));

        expect(result.current.query).toEqual("");
        expect(result.current.data).toEqual(null);

        act(() => result.current.setQuery("test"));
        await waitForNextUpdate();
        expect(result.current.data).toEqual(["part 1"]);

        // act(() => result.current.setQuery("test"));
        // await waitForNextUpdate();
        // expect(result.current.hits).toEqual(["test"]);
        // expect(result.current.query).toEqual("test");

        // act(() => result.current.setQuery("hello world"));
        // await waitForNextUpdate();
        // expect(result.current.hits).toEqual(["hello", "world"]);
        // expect(result.current.query).toEqual("hello world");

        // act(() => result.current.setQuery(""));
        // expect(result.current.hits).toEqual([]);
        // expect(result.current.query).toEqual("");
    });
});
