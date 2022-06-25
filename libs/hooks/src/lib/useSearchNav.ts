import algoliasearch from "algoliasearch";
import { useEffect, useState } from "react";

export function useSearchNav<T>(algoliaAppId: string, algoliaApiKey: string, algoliaIndexName: string, max?: number) {
    const searchClient = algoliasearch(algoliaAppId, algoliaApiKey);
    const index = searchClient.initIndex(algoliaIndexName);

    const [query, setQuery] = useState("");
    const [hits, setHits] = useState<T[]>([]);

    useEffect(() => {
        if (query === "") setHits([]);
        else index.search(query, { hitsPerPage: max, page: 0 }).then((data) => setHits(data.hits as any));
    }, [query]);

    return { query, setQuery, hits };
}

export default useSearchNav;
