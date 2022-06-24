import { render, screen } from "@testing-library/react";
import { ManufacturerHead } from "./";

describe("manufacturer head", () => {
    it("should update the head with the correct tags", async () => {
        const out = render(<ManufacturerHead name="Hello World" manufacturer="hello-world" description="Hello world description" color="indigo" />);

        console.log(out.findByRole("mh-title"));

        // const title = screen.getByRole("mh-title");
        // const description = screen.getByRole("mh-description");
        // const color = screen.getByRole("mh-color");
        // const url = screen.getByRole("mh-url");
        // const ogTitle = screen.getByRole("mh-og-title");
        // const ogDescription = screen.getByRole("mh-og-description");
        // const ogUrl = screen.getByRole("mh-og-url");

        // expect(title.textContent).toEqual("Hello World - Facture");
        // expect(description).toHaveProperty("name", "Hello world description");
    });
});
