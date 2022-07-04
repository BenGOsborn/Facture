import { useSearchNav } from "@facture/hooks";

import { SearchBar } from "./searchBar";
import { SearchHits } from "./searchHits";

export function Search() {
    const algoliaAppId = process.env["NEXT_PUBLIC_ALGOLIA_APP_ID"] as string;
    const algoliaApiKey = process.env["NEXT_PUBLIC_ALGOLIA_API_KEY"] as string;
    const algoliaIndexName = process.env["NEXT_PUBLIC_ALGOLIA_INDEX_NAME"] as string;

    const { query, setQuery, hits } = useSearchNav(algoliaAppId, algoliaApiKey, algoliaIndexName, 4);

    return (
        <div className="relative">
            <SearchBar value={query} onChange={(query) => setQuery(query)} />
            {query !== "" && <SearchHits query={query} hits={hits} onClick={() => setQuery("")} />}
        </div>
    );
}

export default Search;
