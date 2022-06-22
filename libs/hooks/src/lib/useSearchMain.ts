import { useQuery } from "@apollo/client";
import { FindManufacturerCardQuery, FindManufacturerCardQueryVariables } from "@facture/types";
import { findManufacturerCard, parseFindManufacturerCardQuery } from "@facture/graphql";
import algoliasearch from "algoliasearch";
import { useState } from "react";

export function useSearchMain<T>(algoliaAppId: string, algoliaApiKey: string, algoliaIndexName: string, pageSize: number) {
    const searchClient = algoliasearch(algoliaAppId, algoliaApiKey);
    const index = searchClient.initIndex(algoliaIndexName);

    const [page, setPage] = useState<number>(1);

    const [query, setQuery] = useState<string>("");

    // **** I really do need some way of dealing with the page size and limit of course

    const { error, loading, data, fetchMore } = useQuery<FindManufacturerCardQuery, FindManufacturerCardQueryVariables>(findManufacturerCard, {
        variables: { pageSize, page },
    });

    let manufacturers;
    if (data) manufacturers = parseFindManufacturerCardQuery(data);

    return { data: manufacturers, setQuery };
}

export default useSearchMain;
