import { render } from "@testing-library/react";

import { Badge } from ".";

describe("badge", () => {
    it("should return a badge with the correct text and color", () => {
        const testData = {
            text: "Hello World",
            color: "indigo" as const,
        };

        const component = render(<Badge {...testData} />);

        const badge = component.getByRole("badge");

        expect(badge.className).toContain(`bg-${testData.color}-100`);
        expect(badge.className).toContain(`text-${testData.color}-800`);
        expect(badge.className).toContain("lowercase");
        expect(badge.textContent).toEqual(testData.text);
    });
});
