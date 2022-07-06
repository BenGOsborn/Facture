import { emitCardSearchResults } from "@facture/helpers";
import type { CardType, SearchHitType } from "@facture/types";
import { useEffect } from "react";

export function useOnSearchHit(card: CardType, query: string, hits: SearchHitType[]) {
    useEffect(() => {
        hits.forEach((elem, index) => emitCardSearchResults(card, elem.manufacturer, query, index + 1, hits.length));
    }, [hits]);
}

export default useOnSearchHit;
