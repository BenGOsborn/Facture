import { useQuery } from "@apollo/client";
import { FindManufacturerCardQueryType, FindManufacturerCardQueryVariablesType, SearchHitType } from "@facture/types";
import { findManufacturerCard } from "@facture/graphql";
import { useEffect, useState } from "react";
import { parseFindManufacturerCardQuery } from "@facture/helpers";

export function useSearchMainQuery(pageSize: number) {
    const [data, setData] = useState<SearchHitType[]>([]);
    const [pageCount, setPageCount] = useState<number>(-1);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { data: rawData, fetchMore } = useQuery<FindManufacturerCardQueryType, FindManufacturerCardQueryVariablesType>(findManufacturerCard, {
        variables: { pageSize, page: 1 },
    });

    const loadMore = () => setCurrentPage((page) => page + 1);

    useEffect(() => {
        if (rawData) {
            const parsedData = parseFindManufacturerCardQuery(rawData);

            setData(parsedData);

            const pageCount = rawData.manufacturers?.meta.pagination.pageCount;
            if (pageCount) setPageCount(pageCount);
        }
    }, [rawData]);

    useEffect(() => {
        if (currentPage > 1)
            fetchMore({ variables: { pageSize, page: currentPage } }).then(({ data }) => {
                const parsed = parseFindManufacturerCardQuery(data);
                setData((prev) => (prev ? [...prev, ...parsed] : parsed));
            });
    }, [currentPage, pageSize]);

    return {
        data,
        loadMore: currentPage < pageCount ? loadMore : null,
    };
}

export default useSearchMainQuery;
