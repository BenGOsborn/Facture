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
    it("should call callback function and change url after being entered", () => {
        const testValue = "test 2";
        const testData = {
            onChange: jest.fn(),
            value: "test 1",
        };

        const component = render(<SearchBar {...testData} />);

        const input = component.getByRole("search-bar-input");

        fireEvent.change(input, { target: { value: testValue } });
        expect(testData.onChange).toBeCalledTimes(1);

        const form = component.getByRole("search-bar-form");

        fireEvent.submit(form);
        expect(data.route).toEqual("/search?q=" + encodeURI(testData.value));
        expect(testData.onChange).toBeCalledTimes(2);
    });
});
