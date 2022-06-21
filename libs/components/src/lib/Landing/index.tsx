import { useQuery } from "@apollo/client";
import { findManufacturerCard } from "@facture/graphql";
import { useSearch } from "@facture/hooks";
import { FindManufacturerCardQuery, SearchHit } from "@facture/types";

import { DefaultContent } from "./Content";
import { Hero } from "./Hero";

export function Landing() {
    const algoliaAppId = process.env["NEXT_PUBLIC_ALGOLIA_APP_ID"] as string;
    const algoliaApiKey = process.env["NEXT_PUBLIC_ALGOLIA_API_KEY"] as string;
    const algoliaIndexName = process.env["NEXT_PUBLIC_ALGOLIA_INDEX_NAME"] as string;

    const { loading, data } = useQuery<FindManufacturerCardQuery>(findManufacturerCard);
    const { query, setQuery, hits } = useSearch<SearchHit>(algoliaAppId, algoliaApiKey, algoliaIndexName);

    console.log(hits);

    return (
        <div className="space-y-14">
            <Hero onChange={setQuery} />
            <DefaultContent data={data} />
        </div>
    );
}

export default Landing;
