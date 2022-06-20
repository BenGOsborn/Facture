import { useSearch } from "@facture/hooks";
import { Manufacturer } from "@facture/types";

import SearchBar from "./searchBar";
import SearchHits from "./searchHits";

export function Search() {
    const algoliaAppId = process.env["NEXT_PUBLIC_ALGOLIA_APP_ID"];
    const algoliaApiKey = process.env["NEXT_PUBLIC_ALGOLIA_API_KEY"];
    const algoliaIndexName = process.env["NEXT_PUBLIC_ALGOLIA_INDEX_NAME"];

    const { setQuery, hits } = useSearch<Manufacturer>(algoliaAppId, algoliaApiKey, algoliaIndexName);

    return (
        <div>
            <SearchBar onChange={(query) => setQuery(query)} />
            <SearchHits hits={hits} />
        </div>
    );
}

export default Search;
