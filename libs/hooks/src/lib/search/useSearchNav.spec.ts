import { renderHook, act } from "@testing-library/react-hooks";

import { useSearchNav } from "./useSearchNav";

const testData = [
    { query: "", hits: ["not", "empty"] },
    { query: "hello world", hits: ["hello", "world"] },
    { query: "test", hits: ["test"] },
    { query: "", hits: ["else"] },
];

interface Hits {
    hits: string[];
}

jest.mock("algoliasearch", () => {
    const originalModule = jest.requireActual("algoliasearch");

    return {
        __esModule: true,
        ...originalModule,
        default: (algoliaAppId: string, algoliaApiKey: string) => {
            return {
                initIndex: (algoliaIndexName: string) => {
                    return {
                        search: (query: string, options: { maxFacetHits: number }) => {
                            if (query === testData[0].query) return new Promise<Hits>((resolve) => resolve({ hits: testData[0].hits }));
                            if (query === testData[1].query) return new Promise<Hits>((resolve) => resolve({ hits: testData[1].hits }));
                            if (query === testData[2].query) return new Promise<Hits>((resolve) => resolve({ hits: testData[2].hits }));
                            return new Promise<Hits>((resolve) => resolve({ hits: testData[3].hits }));
                        },
                    };
                },
            };
        },
    };
});

describe("use search nav", () => {
    it("should return correct hits according to the query", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useSearchNav("", "", ""));

        expect(result.current.query).toEqual("");
        expect(result.current.hits).toEqual([]);

        act(() => result.current.setQuery(testData[1].query));
        await waitForNextUpdate();
        expect(result.current.hits).toEqual(testData[1].hits);
        expect(result.current.query).toEqual(testData[1].query);

        act(() => result.current.setQuery(""));
        await waitForNextUpdate();
        expect(result.current.hits).toEqual([]);
        expect(result.current.query).toEqual("");

        act(() => result.current.setQuery(testData[2].query));
        await waitForNextUpdate();
        expect(result.current.hits).toEqual(testData[2].hits);
        expect(result.current.query).toEqual(testData[2].query);
    });
});
