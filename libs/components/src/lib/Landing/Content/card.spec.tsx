import { render, waitFor } from "@testing-library/react";

import { Card } from "./card";

describe("card", () => {
    it("should render a card", async () => {
        const component = render(
            <Card
                hit={{
                    color: "indigo",
                    descriptionShort: "Test description",
                    logo: { url: "http://test-url-logo" },
                    manufacturer: "test-manufacturer",
                    name: "Test name",
                    thumbnail: { url: "http://test-url-thumbnail" },
                    type: ["test1", "test2"],
                    slogan: "Test slogan",
                }}
            />
        );

        const thumbnail = component.getByRole("card-thumbnail");
        const name = component.getByRole("card-name");
        const slogan = component.getByRole("card-slogan");
        const logo = component.getByRole("card-logo");
        const description = component.getByRole("card-description");

        await waitFor(() => expect(thumbnail.getAttribute("src")).toContain("test-url-thumbnail"));
        expect(name.textContent).toEqual("Test name");
        expect(slogan.textContent).toEqual("Test slogan");
        await waitFor(() => expect(logo.getAttribute("src")).toContain("test-url-logo"));
        expect(description.textContent).toEqual("Test description");
    });
});
