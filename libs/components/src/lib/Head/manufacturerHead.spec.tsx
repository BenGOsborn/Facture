import { render, waitFor, screen } from "@testing-library/react";
import { ManufacturerHead } from ".";

describe("manufacturer head", () => {
    it("should update the head with the correct tags", async () => {
        const component = render(<title>Lol</title>, { container: document.head });

        console.log(document.title);

        // const title = component.getByRole("mh-description");
        // const description = screen.getByRole("mh-description");
        // const color = component.getByRole("mh-color");
        // const url = component.getByRole("mh-url");
        // const ogTitle = component.getByRole("mh-og-title");
        // const ogDescription = component.getByRole("mh-og-description");
        // const ogUrl = component.getByRole("mh-og-url");

        // expect(title.textContent).toEqual("Hello World - Facture");
        // expect(description).toHaveProperty("name", "Hello world description");
    });
});
