import { fireEvent, render, waitFor } from "@testing-library/react";

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
        const component = render(<Search />);

        const input = component.getByRole("search-landing-main-input");

        fireEvent.change(input, { target: { value: "test 2" } });

        const form = component.getByRole("search-landing-main-form");

        fireEvent.submit(form);
        expect(data.route).toEqual("/search?q=" + encodeURI("test 2"));
    });
});
