import { render } from "@testing-library/react";
import { LabelledPair } from "./labelledPair";

describe("labelled pair", () => {
    it("should render a labelled pair", async () => {
        const component = render(
            <LabelledPair
                pair={[
                    ["test1", "1"],
                    ["test2", "2"],
                ]}
            />
        );

        const labelledPairLabel = component.getAllByRole("labelled-pair-label");
        const labelledPairItem = component.getAllByRole("labelled-pair-item");

        expect(labelledPairLabel[0].textContent).toEqual("test1");
        expect(labelledPairItem[0].textContent).toEqual("1");
        expect(labelledPairLabel[1].textContent).toEqual("test2");
        expect(labelledPairItem[1].textContent).toEqual("2");
    });
});
