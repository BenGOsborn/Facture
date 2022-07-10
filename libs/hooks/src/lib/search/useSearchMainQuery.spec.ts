import type { FindManufacturerCardQueryType } from "@facture/types";
import { renderHook, act } from "@testing-library/react-hooks";

import { useSearchMainQuery } from "./useSearchMainQuery";

const testData: FindManufacturerCardQueryType[] = [
    {
        manufacturers: {
            data: [
                {
                    attributes: {
                        descriptionShort: "d1",
                        logo: { data: { attributes: { url: "url1" } } },
                        manufacturer: "m1",
                        name: "n1",
                        type: [{ type: "t1" }],
                        thumbnail: { data: { attributes: { url: "url1" } } },
                        color: "amber",
                        slogan: null,
                    },
                },
            ],
            meta: { pagination: { pageCount: 2 } },
        },
    },
    {
        manufacturers: {
            data: [
                {
                    attributes: {
                        descriptionShort: "d2",
                        logo: { data: { attributes: { url: "url2" } } },
                        manufacturer: "m2",
                        name: "n2",
                        type: [{ type: "t2" }],
                        thumbnail: { data: { attributes: { url: "url2" } } },
                        color: "blue",
                        slogan: null,
                    },
                },
            ],
            meta: { pagination: { pageCount: 2 } },
        },
    },
];

jest.mock("@apollo/client", () => {
    const originalModule = jest.requireActual("@apollo/client");

    const fetchMore = (options: { variables: { pageSize: number; page: number } }) =>
        new Promise<{ data: FindManufacturerCardQueryType }>((resolve) => resolve({ data: testData[1] }));

    return { __esModule: true, ...originalModule, useQuery: (query: string, options: any) => ({ data: testData[0], fetchMore }) };
});

describe("use search main query", () => {
    it("should return hits from the api", async () => {
        const expected = [
            {
                descriptionShort: testData[0].manufacturers.data[0].attributes.descriptionShort,
                logo: { url: testData[0].manufacturers.data[0].attributes.logo.data.attributes.url },
                manufacturer: testData[0].manufacturers.data[0].attributes.manufacturer,
                name: testData[0].manufacturers.data[0].attributes.name,
                slogan: testData[0].manufacturers.data[0].attributes.slogan,
                type: testData[0].manufacturers.data[0].attributes.type?.map((type) => type.type),
                color: testData[0].manufacturers.data[0].attributes.color,
                thumbnail: { url: testData[0].manufacturers.data[0].attributes.thumbnail.data.attributes.url },
            },
            {
                descriptionShort: testData[1].manufacturers.data[0].attributes.descriptionShort,
                logo: { url: testData[1].manufacturers.data[0].attributes.logo.data.attributes.url },
                manufacturer: testData[1].manufacturers.data[0].attributes.manufacturer,
                name: testData[1].manufacturers.data[0].attributes.name,
                slogan: testData[1].manufacturers.data[0].attributes.slogan,
                type: testData[1].manufacturers.data[0].attributes.type?.map((type) => type.type),
                color: testData[1].manufacturers.data[0].attributes.color,
                thumbnail: { url: testData[1].manufacturers.data[0].attributes.thumbnail.data.attributes.url },
            },
        ];

        const { result, waitForNextUpdate } = renderHook(() => useSearchMainQuery(1));

        expect(result.current.data).toEqual([expected[0]]);

        act(() => {
            if (result.current.loadMore) result.current.loadMore();
        });
        await waitForNextUpdate();
        expect(result.current.data).toEqual(expected);

        expect(result.current.loadMore).not.toBeTruthy();
    });
});
