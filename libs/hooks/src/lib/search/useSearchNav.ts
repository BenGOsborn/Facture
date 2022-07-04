import { SEARCH_DELAY } from "@facture/helpers";
import { SearchHit } from "@facture/types";
import algoliasearch from "algoliasearch";
import { useEffect, useState } from "react";
import useDelay from "../useDelay";

import { useLocation } from "../useLocation";
import useOnSearchHit from "./useOnSearchHit";

export function useSearchNav(algoliaAppId: string, algoliaApiKey: string, algoliaIndexName: string, max?: number) {
    const searchClient = algoliasearch(algoliaAppId, algoliaApiKey);
    const index = searchClient.initIndex(algoliaIndexName);

    const location = useLocation();

    const [query, setQuery] = useState("");
    const [queryUpdate, setQueryUpdate] = useState("");
    const [hits, setHits] = useState<SearchHit[]>([]);

    useOnSearchHit("nav_search", queryUpdate, hits);

    useDelay(query, () => setQueryUpdate(query), SEARCH_DELAY);

    useEffect(() => {
        if (queryUpdate === "") setHits([]);
        else
            index
                .search(queryUpdate, {
                    aroundLatLng: location ? `${location.latitude},${location.longitude}` : undefined,
                    hitsPerPage: max,
                    page: 0,
                })
                .then((data) => setHits(data.hits as any));
    }, [queryUpdate, location, max]);

    return { query, setQuery: setQuery, hits };
}

export default useSearchNav;
