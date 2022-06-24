import { render } from "@testing-library/react";
import { ManufacturerHead } from ".";

describe("manufacturer head", () => {
    it("should update the head with the correct tags", () => {
        const component = render(<ManufacturerHead name="Hello World" manufacturer="hello-world" description="Hello world description" color="indigo" />);

        console.log(component);

        // const title = component.getByRole("mh-title");
        // const description = component.getByRole("mh-description");
        // const color = component.getByRole("mh-color");
        // const url = component.getByRole("mh-url");
        // const ogTitle = component.getByRole("mh-og-title");
        // const ogDescription = component.getByRole("mh-og-description");
        // const ogUrl = component.getByRole("mh-og-url");

        // expect(title.textContent).toEqual("Hello World - Facture");
        // expect(description).toHaveProperty("name", "Hello world description");
    });
});
