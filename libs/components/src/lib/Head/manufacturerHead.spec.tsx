import { render } from "@testing-library/react";
import { ManufacturerHead } from ".";

jest.mock("next/head", () => {
    return {
        __esModule: true,
        default: ({ children }: { children: Array<React.ReactElement> }) => {
            return <>{children}</>;
        },
    };
});

describe("manufacturer head", () => {
    it("should update the head with the correct tags", async () => {
        render(<ManufacturerHead name="Name" manufacturer="Manufacturer" description="Description" color="indigo" />, { container: document.head });

        const component = document.head;

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
