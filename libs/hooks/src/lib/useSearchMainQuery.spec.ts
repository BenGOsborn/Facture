import { Enum_Manufacturer_Color, FindManufacturerCardQuery, SearchHit } from "@facture/types";
import { renderHook, act } from "@testing-library/react-hooks";
import { useSearchMainQuery } from "./useSearchMainQuery";

interface Hits {
    data: SearchHit[];
}

jest.mock("@apollo/client", () => {
    const data: FindManufacturerCardQuery[] = [
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
                            color: Enum_Manufacturer_Color["Amber"],
                        },
                    },
                ],
                meta: { pagination: { pageCount: 2 } },
            },
        },
    ];
    const fetchMore = (options: { variables: { pageSize: number; page: number } }) => {};

    return { useQuery: (query: string, options: any) => ({ data, fetchMore }) };
});

describe("use search main query", () => {
    it("should return hits from the api", async () => {
        const { result } = renderHook(() => useSearchMainQuery(1));
    });
});
