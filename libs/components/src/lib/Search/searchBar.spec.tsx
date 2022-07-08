import { fireEvent, render } from "@testing-library/react";
import { SearchBar } from "./searchBar";

const data = { route: "" };

jest.mock("next/router", () => {
    const originalModule = jest.requireActual("next/router");

    return {
        __esModule: true,
        ...originalModule,
        useRouter: () => ({
            query: { q: null },
            push: (route: string) => {
                data.route = route;
            },
        }),
    };
});

describe("search bar", () => {
    it("should call callback function and change url aftr being entered", async () => {
        const handleSearch = jest.fn();

        const component = render(<SearchBar onChange={handleSearch} value="test 1" />);

        const input = component.getByRole("search-bar-input");

        fireEvent.change(input, { target: { value: "test 2" } });
        expect(handleSearch).toBeCalledTimes(1);

        const form = component.getByRole("search-bar-form");

        fireEvent.submit(form);
        expect(data.route).toEqual("/search?q=" + encodeURI("test 1"));
    });
});
