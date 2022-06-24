import { render, screen } from "@testing-library/react";
import { Badge } from "./";

describe("badge", () => {
    it("should return a page with the correct text and color", () => {
        render(<Badge text="Hello World" color="indigo" />);

        const element = screen.getByRole("badge");

        expect(element.className).toContain("bg-indigo-100");
        expect(element.className).toContain("text-indigo-800");
        expect(element.className).toContain("lowercase");
        expect(element.textContent).toEqual("Hello World");
    });
});
