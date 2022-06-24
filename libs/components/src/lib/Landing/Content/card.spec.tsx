import { render } from "@testing-library/react";
import { Card } from "./card";

describe("card", () => {
    it("should render a card", async () => {
        const component = render(
            <Card
                hit={{
                    color: "indigo",
                    descriptionShort: "Test description",
                    logo: { url: "test-url-logo" },
                    manufacturer: "test-manufacturer",
                    name: "Test name",
                    thumbnail: { url: "test-url-thumbnail" },
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

        expect(thumbnail.getAttribute("src")).toEqual("test-url-thumbnail?size=1000x500");
        expect(name.textContent).toEqual("Test name");
        expect(slogan.textContent).toEqual("Test slogan");
        expect(logo.getAttribute("src")).toEqual("test-url-logo?size=50x50");
        expect(description.textContent).toEqual("Test description");
    });
});
