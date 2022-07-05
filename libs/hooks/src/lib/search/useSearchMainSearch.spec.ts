import { AlgoliaManufacturerType } from "@facture/types";
import { renderHook, act } from "@testing-library/react-hooks";

import { useSearchMainSearch } from "./useSearchMainSearch";

interface Hits {
    hits: AlgoliaManufacturerType[];
    nbPages: number;
}

const data: AlgoliaManufacturerType[] = [
    {
        color: "amber",
        descriptionShort: "ds1",
        logo: { url: "url1", width: 0, height: 0 },
        manufacturer: "m1",
        name: "n1",
        thumbnail: { url: "url1", width: 0, height: 0 },
        type: [],
        descriptionLong: "",
        display: [],
        email: [],
        fax: [],
        location: [],
        openingTime: [],
        phoneNo: [],
        priority: "0",
        social: [],
        slogan: undefined,
    },
    {
        color: "blue",
        descriptionShort: "ds2",
        logo: { url: "url2", width: 0, height: 0 },
        manufacturer: "m2",
        name: "n2",
        thumbnail: { url: "url2", width: 0, height: 0 },
        type: [],
        descriptionLong: "",
        display: [],
        email: [],
        fax: [],
        location: [],
        openingTime: [],
        phoneNo: [],
        priority: "0",
        social: [],
        slogan: undefined,
    },
];

const nbPages = 2;

jest.mock("next/router", () => {
    const originalModule = jest.requireActual("next/router");

    return {
        __esModule: true,
        ...originalModule,
        useRouter: () => ({
            query: { search: null },
        }),
    };
});

jest.mock("algoliasearch", () => {
    const originalModule = jest.requireActual("algoliasearch");

    return {
        __esModule: true,
        ...originalModule,
        default: (algoliaAppId: string, algoliaApiKey: string) => {
            return {
                initIndex: (algoliaIndexName: string) => {
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
        expect(result.current.data).toEqual([]);

        act(() => result.current.setQuery("test"));
        await waitForNextUpdate();
        expect(result.current.data).toEqual([
            {
                color: "amber",
                descriptionShort: "ds1",
                logo: { url: "url1", width: 0, height: 0 },
                manufacturer: "m1",
                name: "n1",
                thumbnail: { url: "url1", width: 0, height: 0 },
                type: [],
                slogan: undefined,
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
                logo: { url: "url1", width: 0, height: 0 },
                manufacturer: "m1",
                name: "n1",
                thumbnail: { url: "url1", width: 0, height: 0 },
                type: [],
                slogan: undefined,
            },
            {
                color: "blue",
                descriptionShort: "ds2",
                logo: { url: "url2", width: 0, height: 0 },
                manufacturer: "m2",
                name: "n2",
                thumbnail: { url: "url2", width: 0, height: 0 },
                type: [],
                slogan: undefined,
            },
        ]);

        expect(result.current.loadMore).not.toBeTruthy();
    });
});
