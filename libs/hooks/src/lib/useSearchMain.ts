import { useQuery } from "@apollo/client";
import { FindManufacturerCardQuery, FindManufacturerCardQueryVariables, SearchHit } from "@facture/types";
import { findManufacturerCard, parseAlgoliaSearchHits, parseFindManufacturerCardQuery } from "@facture/graphql";
import algoliasearch from "algoliasearch";
import { useEffect, useMemo, useState } from "react";

export function useSearchMain(algoliaAppId: string, algoliaApiKey: string, algoliaIndexName: string, pageSize: number) {
    const [queryData, setQueryData] = useState<SearchHit[] | null>(null);
    const [queryPageCount, setQueryPageCount] = useState<number>(-1);
    const [queryCurrentPage, setQueryCurrentPage] = useState<number>(1);

    const { data: rawQueryData, fetchMore } = useQuery<FindManufacturerCardQuery, FindManufacturerCardQueryVariables>(findManufacturerCard, {
        variables: { pageSize, page: 1 },
    });

    const loadMoreQuery = () => setQueryCurrentPage((page) => page + 1);

    useEffect(() => {
        if (queryCurrentPage > 1)
            fetchMore({ variables: { pageSize, page: queryCurrentPage } }).then(({ data }) => {
                const parsed = parseFindManufacturerCardQuery(data);
                if (parsed) setQueryData((prev) => (prev ? [...prev, ...parsed] : parsed));
            });
    }, [queryCurrentPage]);

    useEffect(() => {
        if (rawQueryData) {
            const parsed = parseFindManufacturerCardQuery(rawQueryData);
            setQueryData(parsed);

            const pageCount = rawQueryData.manufacturers?.meta.pagination.pageCount;
            if (pageCount) setQueryPageCount(pageCount);
        }
    }, [rawQueryData]);

    const searchClient = algoliasearch(algoliaAppId, algoliaApiKey);
    const index = searchClient.initIndex(algoliaIndexName);

    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchData, setSearchData] = useState<SearchHit[] | null>(null);
    const [searchPageCount, setSearchPageCount] = useState<number>(-1);
    const [searchCurrentPage, setSearchCurrentPage] = useState<number>(0);

    const loadMoreSearch = () => setSearchCurrentPage((page) => page + 1);

    useEffect(() => {
        if (searchQuery === "") {
            setSearchData(null);
        } else
            index.search(searchQuery, { hitsPerPage: pageSize, page: 0 }).then((data) => {
                setSearchPageCount(data.nbPages);
                setSearchData(parseAlgoliaSearchHits(data.hits));
            });

        setSearchCurrentPage(0);
    }, [searchQuery, pageSize]);

    useEffect(() => {
        if (searchCurrentPage > 0)
            index.search(searchQuery, { hitsPerPage: pageSize, page: searchCurrentPage }).then((data) =>
                setSearchData((prev) => {
                    const parsed = parseAlgoliaSearchHits(data.hits);
                    return prev ? [...prev, ...parsed] : parsed;
                })
            );
    }, [searchCurrentPage]);

    return {
        data: searchData || queryData,
        loadMore: searchData ? (searchCurrentPage < searchPageCount - 1 ? loadMoreSearch : null) : queryCurrentPage < queryPageCount ? loadMoreQuery : null,
        query: searchQuery,
        setQuery: setSearchQuery,
    };
}

export default useSearchMain;
