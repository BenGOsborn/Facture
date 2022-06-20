import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks-web";

interface Props {
    appId: string;
    algoliaApiKey: string;
    indexName: string;
    children: any;
}

export function AlgoliaProvider({ appId, algoliaApiKey, indexName, children }: Props) {
    const searchClient = algoliasearch(appId, algoliaApiKey);

    return (
        <InstantSearch searchClient={searchClient} indexName={indexName}>
            {children}
        </InstantSearch>
    );
}

export default AlgoliaProvider;
