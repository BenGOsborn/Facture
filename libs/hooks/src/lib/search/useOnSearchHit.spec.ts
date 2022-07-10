import type { CardType, SearchHitType } from "@facture/types";
import { renderHook } from "@testing-library/react-hooks";

import { useOnSearchHit } from "./useOnSearchHit";

describe("use on search hit", () => {
    it("should cause analytic hits on search", async () => {
        const testData: { cardType: CardType; query: string; hits: SearchHitType[] }[] = [
            {
                cardType: "landing_search",
                query: "",
                hits: [{ color: "amber", descriptionShort: "", logo: { url: "" }, manufacturer: "", name: "", thumbnail: { url: "" }, type: [], slogan: null }],
            },
            {
                cardType: "landing_search",
                query: "",
                hits: [{ color: "blue", descriptionShort: "", logo: { url: "" }, manufacturer: "", name: "", thumbnail: { url: "" }, type: [], slogan: null }],
            },
        ];

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.gtag = jest.fn();

        const { rerender } = renderHook(({ cardType, query, hits }) => useOnSearchHit(cardType, query, hits), { initialProps: testData[0] });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(window.gtag).toHaveBeenCalledTimes(1);

        rerender(testData[1]);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(window.gtag).toHaveBeenCalledTimes(2);
    });
});
