import { render } from "@testing-library/react";
import { Badge } from ".";

describe("badge", () => {
    it("should return a page with the correct text and color", () => {
        const component = render(<Badge text="Hello World" color="indigo" />);

        const badge = component.getByRole("badge");

        expect(badge.className).toContain("bg-indigo-100");
        expect(badge.className).toContain("text-indigo-800");
        expect(badge.className).toContain("lowercase");
        expect(badge.textContent).toEqual("Hello World");
    });
});
