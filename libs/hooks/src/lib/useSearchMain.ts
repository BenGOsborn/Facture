import { useQuery } from "@apollo/client";
import { FindManufacturerCardQuery } from "@facture/types";
import { findManufacturerCard, parseFindManufacturerCardQuery } from "@facture/graphql";
import algoliasearch from "algoliasearch";
import { useState } from "react";

export function useSearchMain<T>(algoliaAppId: string, algoliaApiKey: string, algoliaIndexName: string) {
    const searchClient = algoliasearch(algoliaAppId, algoliaApiKey);
    const index = searchClient.initIndex(algoliaIndexName);

    const [query, setQuery] = useState<string>("");

    const { error, loading, data } = useQuery<FindManufacturerCardQuery>(findManufacturerCard);

    let manufacturers;
    if (data) manufacturers = parseFindManufacturerCardQuery(data);

    return { data: manufacturers, setQuery };
}

export default useSearchMain;
