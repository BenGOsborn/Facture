import { renderHook, act } from "@testing-library/react-hooks";
import { useSearchNav } from "./useSearchNav";

jest.mock("algoliasearch", () => ({
    default: (algoliaAppId: string, algoliaApiKey: string) => {
        return {
            initIndex: (algoliaIndexName: string) => {
                return {
                    search: (query: string, options: { maxFacetHits: number }) => {
                        if (query === "") return new Promise<{ hits: string[] }>((resolve) => resolve({ hits: ["not", "empty"] }));
                        if (query === "hello world") return new Promise<{ hits: string[] }>((resolve) => resolve({ hits: ["hello", "world"] }));
                        if (query === "test") return new Promise<{ hits: string[] }>((resolve) => resolve({ hits: ["test"] }));
                        return new Promise<{ hits: string[] }>((resolve) => resolve({ hits: ["else"] }));
                    },
                };
            },
        };
    },
}));

describe("use search nav", () => {
    it("should should according to the query", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useSearchNav<string[]>("", "", ""));

        expect(result.current.hits).toEqual([]);
        expect(result.current.query).toEqual("");

        act(() => result.current.setQuery("test"));
        await waitForNextUpdate();
        expect(result.current.hits).toEqual(["test"]);
        expect(result.current.query).toEqual("test");

        act(() => result.current.setQuery("hello world"));
        await waitForNextUpdate();
        expect(result.current.hits).toEqual(["hello", "world"]);
        expect(result.current.query).toEqual("hello world");

        // act(() => result.current.incSelected());
        // expect(result.current.selected).toEqual(1);
    });
});
