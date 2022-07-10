import { render, waitFor } from "@testing-library/react";
import { Info } from ".";

describe("info", () => {
    it("should render an info section", async () => {
        const testData = {
            color: "indigo" as "indigo",
            slogan: "Test slogan",
            description: "Test description",
            logo: { url: "http://test-url-logo" },
            name: "Test name",
            type: ["test1", "test2"],
            dateEstablished: null,
        };

        const component = render(<Info {...testData} />);

        const logo = component.getByRole("info-logo");
        const name = component.getByRole("info-name");
        const slogan = component.getByRole("info-slogan");
        const description = component.getByRole("info-description");

        await waitFor(() => expect(logo.getAttribute("src")).toContain(testData.logo.url));
        expect(name.textContent).toEqual(testData.name);
        expect(slogan.textContent).toEqual(testData.slogan);
        expect(description.textContent).toEqual(testData.description);
    });
});
