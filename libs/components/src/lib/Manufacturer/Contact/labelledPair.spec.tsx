import { render } from "@testing-library/react";
import { LabelledPair } from "./labelledPair";

describe("labelled pair", () => {
    it("should render a labelled pair", async () => {
        const component = render(
            <LabelledPair
                pair={[
                    ["test", "1"],
                    ["test", "2"],
                ]}
            />
        );

        const labelledPair = component.getAllByRole("labelled-pair");

        console.log(labelledPair);
    });
});
