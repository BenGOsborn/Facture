import { search, SEARCH_DELAY } from "@facture/helpers";
import type { SearchHitType } from "@facture/types";
import { useEffect, useState } from "react";

import { useDelay } from "../useDelay";
import { useLocation } from "../useLocation";
import { useOnSearchHit } from "./useOnSearchHit";

export function useSearchNav(algoliaAppId: string, algoliaApiKey: string, algoliaIndexName: string, max?: number) {
    const searchClient = search<SearchHitType>(algoliaAppId, algoliaApiKey, algoliaIndexName);

    const location = useLocation();

    const [query, setQuery] = useState("");
    const [queryUpdate, setQueryUpdate] = useState("");
    const [hits, setHits] = useState<SearchHitType[]>([]);

    useOnSearchHit("nav_search", queryUpdate, hits);
    useDelay(query, () => setQueryUpdate(query), SEARCH_DELAY);

    useEffect(() => {
        if (queryUpdate === "") setHits([]);
        else
            searchClient
                .search(queryUpdate, {
                    aroundLatLng: location ? `${location.latitude},${location.longitude}` : undefined,
                    hitsPerPage: max,
                    page: 0,
                })
                .then((data) => setHits(data.hits));
    }, [queryUpdate, location, max]);

    return { query, setQuery: setQuery, hits };
}

export default useSearchNav;
