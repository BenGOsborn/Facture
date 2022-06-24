import { render } from "@testing-library/react";
import { Type } from "./type";

describe("type", () => {
    it("should render a type", async () => {
        const component = render(<Type type={["test1", "test2"]} color="indigo" />);

        const type = component.getByRole("type");

        console.log(type.childNodes.length);
    });
});
