import { render } from "@testing-library/react";

import { Type } from "./type";

describe("type", () => {
    it("should render a list of types", () => {
        const testData = {
            type: ["test1", "test2"],
            color: "indigo" as const,
        };

        const component = render(<Type {...testData} />);

        const badge = component.getAllByRole("badge");

        expect(badge[0].textContent).toEqual(testData.type[0]);
        expect(badge[0].className).toContain(`bg-${testData.color}`);
        expect(badge[0].className).toContain(`text-${testData.color}`);
        expect(badge[1].textContent).toEqual(testData.type[1]);
        expect(badge[1].className).toContain(`bg-${testData.color}`);
        expect(badge[1].className).toContain(`text-${testData.color}`);
    });
});
