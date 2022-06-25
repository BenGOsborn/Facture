import { SearchHit } from "@facture/types";
import { renderHook, act } from "@testing-library/react-hooks";
import { useSearchMainQuery } from "./useSearchMainQuery";

interface Hits {
    data: SearchHit[];
}

jest.mock("@apollo/client", () => {
    const data: SearchHit[] = [];
    const fetchMore = jest.fn();

    return { useQuery: jest.fn(() => ({ data, fetchMore })) };
});

describe("use search main search", () => {
    it("should return hits according to the query", async () => {});
});
