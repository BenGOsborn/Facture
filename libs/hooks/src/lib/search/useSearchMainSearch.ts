import { SearchHitType } from "@facture/types";
import { parseAlgoliaSearchHits } from "@facture/graphql";
import algoliasearch from "algoliasearch";
import { SEARCH_DELAY } from "@facture/helpers";
import { useEffect, useState } from "react";

import { useSearchMainSearchURL } from "./useSearchMainSearchURL";
import { useLocation } from "../useLocation";
import useOnSearchHit from "./useOnSearchHit";
import useDelay from "../useDelay";

export function useSearchMainSearch(algoliaAppId: string, algoliaApiKey: string, algoliaIndexName: string, pageSize: number) {
    const searchClient = algoliasearch(algoliaAppId, algoliaApiKey);
    const index = searchClient.initIndex(algoliaIndexName);

    const [query, setQuery] = useState<string>("");
    const [queryUpdate, setQueryUpdate] = useState<string>("");
    const [data, setData] = useState<SearchHitType[]>([]);
    const [pageCount, setPageCount] = useState<number>(-1);
    const [currentPage, setCurrentPage] = useState<number>(0);

    const location = useLocation();

    useSearchMainSearchURL(query, setQuery);
    useOnSearchHit("landing_search", queryUpdate, data);

    useDelay(query, () => setQueryUpdate(query), SEARCH_DELAY);

    const loadMore = () => setCurrentPage((page) => page + 1);

    useEffect(() => {
        if (queryUpdate === "") setData([]);
        else
            index
                .search(queryUpdate, { aroundLatLng: location ? `${location.latitude},${location.longitude}` : undefined, hitsPerPage: pageSize, page: 0 })
                .then((data) => {
                    setPageCount(data.nbPages);
                    setData(parseAlgoliaSearchHits(data.hits));
                });

        setCurrentPage(0);
    }, [queryUpdate, pageSize, location]);

    useEffect(() => {
        if (currentPage > 0)
            index
                .search(queryUpdate, { aroundLatLng: location ? `${location.latitude},${location.longitude}` : undefined, hitsPerPage: pageSize, page: currentPage })
                .then((data) =>
                    setData((prev) => {
                        const parsed = parseAlgoliaSearchHits(data.hits);
                        return prev ? [...prev, ...parsed] : parsed;
                    })
                );
    }, [currentPage, location, pageSize]);

    return {
        data,
        loadMore: currentPage < pageCount - 1 ? loadMore : null,
        query,
        setQuery,
    };
}

export default useSearchMainSearch;
