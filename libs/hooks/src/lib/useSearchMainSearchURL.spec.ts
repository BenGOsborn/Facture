import { renderHook, act } from "@testing-library/react-hooks";
import { useSearchMainSearchURL } from "./useSearchMainSearchURL";

const store = { query: "" };

jest.mock("next/router", () => {
    const originalModule = jest.requireActual("next/router");

    return {
        __esModule: true,
        ...originalModule,
        useRouter: () => ({
            query: { search: "test 1" },
            push: (query: string) => {
                store.query = query;
            },
        }),
    };
});

describe("use search main search url", () => {
    it("should return load the query from url and update the main query with it", async () => {
        const setQuery = jest.fn((query: string) => {});

        const { rerender } = renderHook(({ query, setQuery }) => useSearchMainSearchURL(query, setQuery), {
            initialProps: { query: "", setQuery },
        });

        expect(setQuery).toHaveBeenCalled();

        // **** How am I going to test that the correct rerender got called ?

        rerender({ query: "test 2", setQuery });
        console.log(store);

        rerender({ query: "", setQuery });
    });
});
