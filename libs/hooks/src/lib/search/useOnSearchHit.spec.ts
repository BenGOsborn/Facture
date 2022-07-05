import { CardType, SearchHitType } from "@facture/types";
import { renderHook } from "@testing-library/react-hooks";
import { useOnSearchHit } from "./useOnSearchHit";

describe("use on search hit", () => {
    it("should cause analytic hits on search", async () => {
        const hits: SearchHitType[] = [{ color: "amber", descriptionShort: "", logo: { url: "" }, manufacturer: "", name: "", thumbnail: { url: "" }, type: [] }];

        const analyticsCall = jest.fn();

        // @ts-ignore
        window.gtag = analyticsCall;

        // const { rerender } = renderHook(({ cardType, query, hits }) => useOnSearchHit(cardType, query, hits), {
        //     initialProps: { cardType: "landing_search" as CardType, query: "", hits },
        // });

        rerender({ cardType: "landing_search", query: "", hits });

        expect(analyticsCall).toHaveBeenCalled();
    });
});
