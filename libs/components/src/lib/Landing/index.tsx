import { useQuery } from "@apollo/client";
import { useSearch } from "@facture/hooks";
import { SearchHit } from "@facture/types";

import { Content } from "./Content";
import { Hero } from "./Hero";

export function Landing() {
    const algoliaAppId = process.env["NEXT_PUBLIC_ALGOLIA_APP_ID"];
    const algoliaApiKey = process.env["NEXT_PUBLIC_ALGOLIA_API_KEY"];
    const algoliaIndexName = process.env["NEXT_PUBLIC_ALGOLIA_INDEX_NAME"];

    // const { query, setQuery, searchHits } = useSearch<SearchHit>(algoliaAppId, algoliaApiKey, algoliaIndexName);
    // const {loading, error, queryHits } = useQuery(findManufacturers, { variables: { query: query } }));

    // **** We need some sort of global data store here where we will mainly use the algolia search results but if there is no query we will use the useQuery ref

    return (
        <div className="space-y-14">
            <Hero />
            <Content />
        </div>
    );
}

export default Landing;
