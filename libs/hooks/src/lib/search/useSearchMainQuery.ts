import { useQuery } from "@apollo/client";
import type { FindManufacturerCardQueryType, FindManufacturerCardQueryVariablesType, SearchHitType } from "@facture/types";
import { findManufacturerCard } from "@facture/graphql";
import { useEffect, useState } from "react";
import { parseManufacturerCardData, parseManufacturerCardMeta } from "@facture/helpers";

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
            const parsedData = parseManufacturerCardData(rawData);
            setData(parsedData);

            const parsedMeta = parseManufacturerCardMeta(rawData);
            setPageCount(parsedMeta.pagination.pageCount);
        }
    }, [rawData]);

    useEffect(() => {
        if (currentPage > 1)
            fetchMore({ variables: { pageSize, page: currentPage } }).then(({ data }) => {
                const parsedData = parseManufacturerCardData(data);
                setData((prev) => (prev ? [...prev, ...parsedData] : parsedData));
            });
    }, [currentPage, pageSize]);

    return {
        data,
        loadMore: currentPage < pageCount ? loadMore : null,
    };
}

export default useSearchMainQuery;
