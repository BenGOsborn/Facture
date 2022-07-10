import { render } from "@testing-library/react";

import { LabelledPair } from "./labelledPair";

describe("labelled pair", () => {
    it("should render a labelled pair", () => {
        const testData = {
            pair: [
                ["test1", "1"],
                ["test2", "2"],
            ] as [string, string][],
        };

        const component = render(<LabelledPair {...testData} />);

        const labelledPairLabel = component.getAllByRole("labelled-pair-label");
        const labelledPairItem = component.getAllByRole("labelled-pair-item");

        expect(labelledPairLabel[0].textContent).toEqual(testData.pair[0][0]);
        expect(labelledPairItem[0].textContent).toEqual(testData.pair[0][1]);
        expect(labelledPairLabel[1].textContent).toEqual(testData.pair[1][0]);
        expect(labelledPairItem[1].textContent).toEqual(testData.pair[1][1]);
    });
});
