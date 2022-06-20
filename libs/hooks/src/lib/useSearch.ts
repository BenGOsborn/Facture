import algoliasearch from "algoliasearch";
import { useMemo, useState } from "react";

export function useSearch<T>(algoliaAppId: string, algoliaApiKey: string, algoliaIndexName: string, max?: number) {
    const searchClient = algoliasearch(algoliaAppId, algoliaApiKey);
    const index = searchClient.initIndex(algoliaIndexName);

    const [query, setQuery] = useState("");
    const [hits, setHits] = useState<T[]>([]);

    useMemo(() => (query === "" ? setHits([]) : index.search(query, { maxFacetHits: max }).then((data) => setHits(data.hits as any))), [query]);

    return { query, setQuery, hits };
}

export default useSearch;
