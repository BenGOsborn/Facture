import algoliasearch from "algoliasearch";
import Link from "next/link";
import { Search as SearchIcon } from "tabler-icons-react";

export function Search() {
    const algoliaAppId = process.env["NEXT_PUBLIC_ALGOLIA_APP_ID"];
    const algoliaApiKey = process.env["NEXT_PUBLIC_ALGOLIA_API_KEY"];
    const algoliaIndexName = process.env["NEXT_PUBLIC_ALGOLIA_INDEX_NAME"];

    const searchClient = algoliasearch(algoliaAppId, algoliaApiKey);
    const index = searchClient.initIndex(algoliaIndexName);

    return (
        <>
            <Link href="/">
                <a className="flex items-center space-x-3 text-white bg-gray-900 px-4 py-2 rounded-md">
                    <span>
                        <SearchIcon />
                    </span>
                    <span className="text-lg font-medium">Search</span>
                </a>
            </Link>
        </>
    );
}

export default Search;
