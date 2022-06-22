import { useSearchNav } from "@facture/hooks";
import { SearchHit } from "@facture/types";

import { SearchBar } from "./searchBar";
import { SearchHits } from "./searchHits";

export function Search() {
    const algoliaAppId = process.env["NEXT_PUBLIC_ALGOLIA_APP_ID"] as string;
    const algoliaApiKey = process.env["NEXT_PUBLIC_ALGOLIA_API_KEY"] as string;
    const algoliaIndexName = process.env["NEXT_PUBLIC_ALGOLIA_INDEX_NAME"] as string;

    const { query, setQuery, hits } = useSearchNav<SearchHit>(algoliaAppId, algoliaApiKey, algoliaIndexName, 3);

    return (
        <div className="relative">
            <SearchBar value={query} onChange={(query) => setQuery(query)} />
            <SearchHits hits={hits} onClick={() => setQuery("")} />
        </div>
    );
}

export default Search;
