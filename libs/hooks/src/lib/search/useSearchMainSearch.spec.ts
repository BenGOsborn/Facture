import type { AlgoliaManufacturerType } from "@facture/types";
import { renderHook, act } from "@testing-library/react-hooks";

import { useSearchMainSearch } from "./useSearchMainSearch";

interface Hits {
    hits: AlgoliaManufacturerType[];
    nbPages: number;
}

const testQuery = "test";
const testData: AlgoliaManufacturerType[] = [
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
        slogan: null,
        dateEstablished: null,
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
        slogan: null,
        dateEstablished: null,
    },
];

const nbPages = 2;

jest.mock("next/router", () => {
    const originalModule = jest.requireActual("next/router");

    return {
        __esModule: true,
        ...originalModule,
        useRouter: () => ({
            query: { q: null },
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
                            else if (query === testQuery && options.page === 0) return new Promise<Hits>((resolve) => resolve({ hits: [testData[0]], nbPages }));
                            else if (query === testQuery && options.page === 1) return new Promise<Hits>((resolve) => resolve({ hits: [testData[1]], nbPages }));
                            return new Promise<Hits>((resolve) => resolve({ hits: [testData[0]], nbPages }));
                        },
                    };
                },
            };
        },
    };
});

describe("use search main search", () => {
    it("should return hits according to the query", async () => {
        const expected = [
            {
                color: testData[0].color,
                descriptionShort: testData[0].descriptionShort,
                logo: testData[0].logo,
                manufacturer: testData[0].manufacturer,
                name: testData[0].name,
                thumbnail: testData[0].thumbnail,
                type: testData[0].type,
                slogan: testData[0].slogan,
            },
            {
                color: testData[1].color,
                descriptionShort: testData[1].descriptionShort,
                logo: testData[1].logo,
                manufacturer: testData[1].manufacturer,
                name: testData[1].name,
                thumbnail: testData[1].thumbnail,
                type: testData[1].type,
                slogan: testData[1].slogan,
            },
        ];

        const { result, waitForNextUpdate } = renderHook(() => useSearchMainSearch("", "", "", 1));

        expect(result.current.query).toEqual("");
        expect(result.current.data).toEqual([]);

        act(() => result.current.setQuery(testQuery));
        await waitForNextUpdate();
        expect(result.current.data).toEqual([expected[0]]);

        act(() => {
            if (result.current.loadMore) result.current.loadMore();
        });
        await waitForNextUpdate();
        expect(result.current.data).toEqual(expected);

        expect(result.current.loadMore).not.toBeTruthy();
    });
});
