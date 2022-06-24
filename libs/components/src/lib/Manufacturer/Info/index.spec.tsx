import { render } from "@testing-library/react";
import { Info } from ".";

describe("info", () => {
    it("should render an info section", () => {
        const component = render(
            <Info color="indigo" slogan="Test slogan" description="Test description" logo={{ url: "test-url-logo" }} name="Test name" type={["test1", "test2"]} />
        );

        const logo = component.getByRole("info-logo");
        const name = component.getByRole("info-name");
        const slogan = component.getByRole("info-slogan");
        const description = component.getByRole("info-description");

        expect(logo.getAttribute("src")).toEqual("test-url-logo?size=75x75");
        expect(name.textContent).toEqual("Test name");
        expect(slogan.textContent).toEqual("Test slogan");
        expect(description.textContent).toEqual("Test description");
    });
});
