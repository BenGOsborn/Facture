import algoliasearch from "algoliasearch";
import { useEffect, useState } from "react";

import { useLocation } from "./useLocation";

export function useSearchNav<T>(algoliaAppId: string, algoliaApiKey: string, algoliaIndexName: string, max?: number) {
    const searchClient = algoliasearch(algoliaAppId, algoliaApiKey);
    const index = searchClient.initIndex(algoliaIndexName);

    const location = useLocation();

    const [query, setQuery] = useState("");
    const [hits, setHits] = useState<T[]>([]);

    useEffect(() => {
        if (query === "") setHits([]);
        else
            index
                .search(query, {
                    aroundLatLng: location ? `${location.latitude},${location.longitude}` : undefined,
                    hitsPerPage: max,
                    page: 0,
                })
                .then((data) => setHits(data.hits as any));
    }, [query, location, max]);

    return { query, setQuery, hits };
}

export default useSearchNav;
