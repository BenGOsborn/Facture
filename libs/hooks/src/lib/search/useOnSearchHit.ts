import { emitCardSearchResults } from "@facture/helpers";
import { SearchHitType } from "@facture/types";
import { useEffect } from "react";

export function useOnSearchHit(card: "nav_search" | "landing_search", query: string, hits: SearchHitType[] | null) {
    useEffect(() => {
        if (!hits) return;

        hits.forEach((elem, index) => emitCardSearchResults(card, elem.manufacturer, query, index + 1, hits.length));
    }, [hits]);
}

export default useOnSearchHit;
