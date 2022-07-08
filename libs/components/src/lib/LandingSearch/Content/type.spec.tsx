import { render } from "@testing-library/react";

import { Type } from "./type";

describe("type", () => {
    it("should render a list of types", () => {
        const component = render(<Type type={["test1", "test2"]} color="indigo" />);

        const badge = component.getAllByRole("badge");

        expect(badge[0].textContent).toEqual("test1");
        expect(badge[0].className).toContain("indigo");
        expect(badge[1].textContent).toEqual("test2");
        expect(badge[1].className).toContain("indigo");
    });
});
