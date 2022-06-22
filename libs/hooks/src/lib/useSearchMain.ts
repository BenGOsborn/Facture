import { useQuery } from "@apollo/client";
import { FindManufacturerCardQuery, FindManufacturerCardQueryVariables, SearchHit } from "@facture/types";
import { findManufacturerCard, parseFindManufacturerCardQuery } from "@facture/graphql";
import algoliasearch from "algoliasearch";
import { useEffect, useState } from "react";

export function useSearchMain(algoliaAppId: string, algoliaApiKey: string, algoliaIndexName: string, pageSize: number) {
    // const searchClient = algoliasearch(algoliaAppId, algoliaApiKey);
    // const index = searchClient.initIndex(algoliaIndexName);

    const [data, setData] = useState<SearchHit[] | null>(null);

    const [pageCount, setPageCount] = useState<number>(-1);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { data: queryData, fetchMore } = useQuery<FindManufacturerCardQuery, FindManufacturerCardQueryVariables>(findManufacturerCard, {
        variables: { pageSize, page: 1 },
    });

    const loadMore = () => setCurrentPage((page) => page + 1);

    useEffect(() => {
        if (currentPage > 1)
            fetchMore({ variables: { pageSize, page: currentPage } }).then(({ data }) => {
                const parsed = parseFindManufacturerCardQuery(data);
                if (parsed) setData((prev) => (prev ? [...prev, ...parsed] : parsed));
            });
    }, [currentPage]);

    useEffect(() => {
        if (queryData) {
            const parsed = parseFindManufacturerCardQuery(queryData);
            setData(parsed);

            const pageCount = queryData.manufacturers?.meta.pagination.pageCount;
            if (pageCount) setPageCount(pageCount);
        }
    }, [queryData]);

    return { data, loadMore: currentPage < pageCount ? loadMore : null };
}

export default useSearchMain;
