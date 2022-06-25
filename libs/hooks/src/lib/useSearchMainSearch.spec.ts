import { SearchHit } from "@facture/types";
import { renderHook, act } from "@testing-library/react-hooks";
import { useSearchMainSearch } from "./useSearchMainSearch";

interface Hits {
    hits: SearchHit[];
    nbPages: number;
}

jest.mock("algoliasearch", () => {
    const originalModule = jest.requireActual("algoliasearch");

    const data: SearchHit[] = [
        {
            color: "amber",
            descriptionShort: "ds1",
            logo: { url: "url1" },
            manufacturer: "m1",
            name: "n1",
            thumbnail: { url: "url1" },
            type: [],
        },
        {
            color: "blue",
            descriptionShort: "ds2",
            logo: { url: "url2" },
            manufacturer: "m2",
            name: "n2",
            thumbnail: { url: "url2" },
            type: [],
        },
        {
            color: "blue",
            descriptionShort: "ds2",
            logo: { url: "url2" },
            manufacturer: "m2",
            name: "n2",
            thumbnail: { url: "url2" },
            type: [],
        },
    ];
    const nbPages = 2;

    return {
        __esModule: true,
        ...originalModule,
        default: (algoliaAppId: any, algoliaApiKey: any) => {
            return {
                initIndex: (algoliaIndexName: any) => {
                    return {
                        search: (query: string, options: { hitsPerPage: number; page: number }) => {
                            if (query === "") return new Promise<Hits>((resolve) => resolve({ hits: [], nbPages }));
                            else if (query === "test" && options.page === 0) return new Promise<Hits>((resolve) => resolve({ hits: [data[0]], nbPages }));
                            else if (query === "test" && options.page === 1) return new Promise<Hits>((resolve) => resolve({ hits: [data[1]], nbPages }));
                            return new Promise<Hits>((resolve) => resolve({ hits: [data[0]], nbPages }));
                        },
                    };
                },
            };
        },
    };
});

describe("use search main search", () => {
    it("should return hits according to the query", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useSearchMainSearch("", "", "", 1));

        expect(result.current.query).toEqual("");
        expect(result.current.data).toEqual(null);

        act(() => result.current.setQuery("test"));
        await waitForNextUpdate();
        expect(result.current.data).toEqual([
            {
                color: "amber",
                descriptionShort: "ds1",
                logo: { url: "url1" },
                manufacturer: "m1",
                name: "n1",
                thumbnail: { url: "url1" },
                type: [],
            },
        ]);

        act(() => {
            if (result.current.loadMore) result.current.loadMore();
        });
        await waitForNextUpdate();
        expect(result.current.data).toEqual([
            {
                color: "amber",
                descriptionShort: "ds1",
                logo: { url: "url1" },
                manufacturer: "m1",
                name: "n1",
                thumbnail: { url: "url1" },
                type: [],
            },
            {
                color: "blue",
                descriptionShort: "ds2",
                logo: { url: "url2" },
                manufacturer: "m2",
                name: "n2",
                thumbnail: { url: "url2" },
                type: [],
            },
        ]);

        expect(result.current.loadMore).not.toBeTruthy();
    });
});
