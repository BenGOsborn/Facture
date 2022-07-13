import type { AlgoliaManufacturerType, SearchHitType } from "@facture/types";
import { parseAlgoliaSearchHits, search, SEARCH_DELAY } from "@facture/helpers";
import { useEffect, useState } from "react";

import { useSearchMainSearchURL } from "./useSearchMainSearchURL";
import { useLocation } from "../useLocation";
import { useOnSearchHit } from "./useOnSearchHit";
import { useDelay } from "../useDelay";

export function useSearchMainSearch(algoliaAppId: string, algoliaApiKey: string, algoliaIndexName: string, pageSize: number) {
    const searchClient = search<AlgoliaManufacturerType>(algoliaAppId, algoliaApiKey, algoliaIndexName);

    const [query, setQuery] = useState<string>("");
    const [queryUpdate, setQueryUpdate] = useState<string>("");
    const [data, setData] = useState<SearchHitType[]>([]);
    const [pageCount, setPageCount] = useState<number>(-1);
    const [currentPage, setCurrentPage] = useState<number>(0);

    const location = useLocation();

    const loadMore = () => setCurrentPage((page) => page + 1);

    useSearchMainSearchURL(query, setQuery);
    useOnSearchHit("landing_search", queryUpdate, data);
    useDelay(query, () => setQueryUpdate(query), SEARCH_DELAY);

    useEffect(() => {
        if (queryUpdate === "") setData([]);
        else
            searchClient
                .search(queryUpdate, {
                    aroundLatLng: location ? `${location.latitude},${location.longitude}` : undefined,
                    hitsPerPage: pageSize,
                    page: 0,
                })
                .then((data) => {
                    setPageCount(data.nbPages);
                    setData(parseAlgoliaSearchHits(data.hits));
                });

        setCurrentPage(0);
    }, [queryUpdate, pageSize, location]);

    useEffect(() => {
        if (currentPage > 0)
            searchClient
                .search(queryUpdate, {
                    aroundLatLng: location ? `${location.latitude},${location.longitude}` : undefined,
                    hitsPerPage: pageSize,
                    page: currentPage,
                })
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
