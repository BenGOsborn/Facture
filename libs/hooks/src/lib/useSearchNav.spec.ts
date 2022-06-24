import { renderHook, act } from "@testing-library/react-hooks";
import { useSearchNav } from "./useSearchNav";

jest.mock("algoliasearch", () => {
    return (algoliaAppId: string, algoliaApiKey: string) => {
        return {
            initIndex: (algoliaIndexName: string) => {
                return {
                    search: (query: string, options: { maxFacetHits: number }) => {
                        if (query === "") return new Promise<{ data: { hits: string[] } }>((resolve) => resolve({ data: { hits: [] } }));
                        if (query === "hello world") return new Promise<{ data: { hits: string[] } }>((resolve) => resolve({ data: { hits: ["hello", "world"] } }));
                        if (query === "test") return new Promise<{ data: { hits: string[] } }>((resolve) => resolve({ data: { hits: ["test"] } }));
                        return new Promise<{ data: { hits: string[] } }>((resolve) => resolve({ data: { hits: ["else"] } }));
                    },
                };
            },
        };
    };
});

describe("use search nav", () => {
    it("should should according to the query", () => {
        const { result } = renderHook(() => useSearchNav<string[]>("", "", ""));

        // expect(result.current.selected).toEqual(0);

        // act(() => result.current.incSelected());
        // expect(result.current.selected).toEqual(1);
        // expect(result.current.position).toEqual([1000, -1000]);

        // act(() => {
        //     result.current.decSelected();
        //     result.current.decSelected();
        // });
        // expect(result.current.selected).toEqual(2);
        // expect(result.current.position).toEqual([-1000, 1000]);

        // act(() => result.current.incSelected());
        // expect(result.current.selected).toEqual(0);
        // expect(result.current.position).toEqual([1000, -1000]);
    });
});
