import { render, screen } from "@testing-library/react";
import { Badge } from "./";

describe("badge", () => {
    it("should return a page with the correct text and color", () => {
        render(<Badge text="Hello World" color="indigo" />);

        const badge = screen.getByRole("badge");

        expect(badge.className).toContain("bg-indigo-100");
        expect(badge.className).toContain("text-indigo-800");
        expect(badge.className).toContain("lowercase");
        expect(badge.textContent).toEqual("Hello World");
    });
});
