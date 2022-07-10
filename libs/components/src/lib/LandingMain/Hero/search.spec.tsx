import { fireEvent, render } from "@testing-library/react";

import { Search } from "./search";

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

describe("search", () => {
    it("should change url after being entered", () => {
        const testValue = "test 2";

        const component = render(<Search />);

        const form = component.getByRole("search-landing-main-form");

        fireEvent.submit(form, { target: { query: { value: testValue } } });
        expect(data.route).toEqual("/search?q=" + encodeURI(testValue));
    });
});
