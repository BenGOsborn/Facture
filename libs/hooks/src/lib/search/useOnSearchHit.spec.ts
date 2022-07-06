import type { CardType, SearchHitType } from "@facture/types";
import { renderHook } from "@testing-library/react-hooks";
import { useOnSearchHit } from "./useOnSearchHit";

describe("use on search hit", () => {
    it("should cause analytic hits on search", async () => {
        const analyticsCall = jest.fn();

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.gtag = analyticsCall;

        const { rerender } = renderHook(({ cardType, query, hits }) => useOnSearchHit(cardType, query, hits), {
            initialProps: {
                cardType: "landing_search" as CardType,
                query: "",
                hits: [
                    { color: "amber", descriptionShort: "", logo: { url: "" }, manufacturer: "", name: "", thumbnail: { url: "" }, type: [], slogan: null },
                ] as SearchHitType[],
            },
        });

        expect(analyticsCall).toHaveBeenCalledTimes(1);

        rerender({
            cardType: "landing_search",
            query: "",
            hits: [
                { color: "blue", descriptionShort: "", logo: { url: "" }, manufacturer: "", name: "", thumbnail: { url: "" }, type: [], slogan: null },
            ] as SearchHitType[],
        });

        expect(analyticsCall).toHaveBeenCalledTimes(2);
    });
});
