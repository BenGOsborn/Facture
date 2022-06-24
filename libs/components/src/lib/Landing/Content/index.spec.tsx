import { render } from "@testing-library/react";
import { Content } from ".";

describe("content", () => {
    it("should render a list of cards", () => {
        const component = render(
            <Content
                data={[
                    { color: "amber", descriptionShort: "", logo: { url: "" }, manufacturer: "", name: "", thumbnail: { url: "" }, type: [] },
                    { color: "amber", descriptionShort: "", logo: { url: "" }, manufacturer: "", name: "", thumbnail: { url: "" }, type: [] },
                ]}
            />
        );

        const badge = component.getAllByRole("card");

        expect(badge.length).toEqual(2);
    });
});
