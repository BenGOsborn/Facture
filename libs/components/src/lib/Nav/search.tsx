import { useSearch } from "@facture/hooks";
import { Manufacturer } from "@facture/types";
import { Search as SearchIcon } from "tabler-icons-react";

export function Search() {
    const algoliaAppId = process.env["NEXT_PUBLIC_ALGOLIA_APP_ID"];
    const algoliaApiKey = process.env["NEXT_PUBLIC_ALGOLIA_API_KEY"];
    const algoliaIndexName = process.env["NEXT_PUBLIC_ALGOLIA_INDEX_NAME"];

    const { setQuery, hits } = useSearch<Manufacturer>(algoliaAppId, algoliaApiKey, algoliaIndexName);

    console.log(hits);

    return (
        <div className="rounded-md bg-gray-900 flex items-center space-x-3 text-white px-4 py-2">
            <label htmlFor="search">
                <SearchIcon />
            </label>
            <input id="search" type="text" className="bg-gray-900 border-none font-medium rounded-md" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
        </div>
    );
}

export default Search;
