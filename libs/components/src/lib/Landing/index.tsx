import { parseFindManufacturerCardQuery } from "@facture/graphql";
import { useSearchMain } from "@facture/hooks";
import { SearchHit } from "@facture/types";

import { Content } from "./Content";
import { Hero } from "./Hero";

export function Landing() {
    const algoliaAppId = process.env["NEXT_PUBLIC_ALGOLIA_APP_ID"] as string;
    const algoliaApiKey = process.env["NEXT_PUBLIC_ALGOLIA_API_KEY"] as string;
    const algoliaIndexName = process.env["NEXT_PUBLIC_ALGOLIA_INDEX_NAME"] as string;

    const { data, setQuery } = useSearchMain<SearchHit>(algoliaAppId, algoliaApiKey, algoliaIndexName, 10);

    return (
        <div className="space-y-14">
            <Hero onChange={setQuery} />
            {data && <Content data={data} />}
        </div>
    );
}

export default Landing;
