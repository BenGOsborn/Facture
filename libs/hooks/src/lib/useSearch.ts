import algoliasearch from "algoliasearch";
import { useMemo, useState } from "react";

export function useSearch<T>(algoliaAppId: string, algoliaApiKey: string, algoliaIndexName: string) {
    const searchClient = algoliasearch(algoliaAppId, algoliaApiKey);
    const index = searchClient.initIndex(algoliaIndexName);

    const [query, setQuery] = useState("");
    const [hits, setHits] = useState<T[]>([]);

    useMemo(() => (query === "" ? setHits([]) : index.search(query).then((data) => setHits(data.hits as any))), [query]);

    return { setQuery, hits };
}

export default useSearch;
