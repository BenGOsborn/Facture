import { useSearchMain } from "@facture/hooks";

import { Content } from "./Content";
import { Hero } from "./Hero";

export function SearchLanding() {
    const algoliaAppId = process.env["NEXT_PUBLIC_ALGOLIA_APP_ID"] as string;
    const algoliaApiKey = process.env["NEXT_PUBLIC_ALGOLIA_API_KEY"] as string;
    const algoliaIndexName = process.env["NEXT_PUBLIC_ALGOLIA_INDEX_NAME"] as string;

    const { data, loadMore, query, setQuery } = useSearchMain(algoliaAppId, algoliaApiKey, algoliaIndexName, 6);

    return (
        <div className="space-y-14 flex flex-col items-center">
            <Hero value={query} onChange={setQuery} />
            <Content query={query} data={data} />
            {loadMore && (
                <button onClick={loadMore} className="px-6 py-4 bg-gray-800 hover:bg-gray-900 transition-colors shadow-md rounded-md text-white font-bold">
                    Load More
                </button>
            )}
        </div>
    );
}

export default SearchLanding;
