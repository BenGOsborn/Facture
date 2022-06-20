import { useSearch } from "@facture/hooks";
import { Manufacturer } from "@facture/types";

import SearchBar from "./searchBar";

export function Search() {
    const algoliaAppId = process.env["NEXT_PUBLIC_ALGOLIA_APP_ID"];
    const algoliaApiKey = process.env["NEXT_PUBLIC_ALGOLIA_API_KEY"];
    const algoliaIndexName = process.env["NEXT_PUBLIC_ALGOLIA_INDEX_NAME"];

    const { setQuery, hits } = useSearch<Manufacturer>(algoliaAppId, algoliaApiKey, algoliaIndexName);

    console.log(hits);

    return <SearchBar onChange={(query) => setQuery(query)} />;
}

export default Search;
