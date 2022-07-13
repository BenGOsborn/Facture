import algoliasearch from "algoliasearch";

export function search<T>(
    algoliaAppId: string,
    algoliaApiKey: string,
    algoliaIndexName: string
): {
    search: (
        query: string,
        options: {
            aroundLatLng?: string | undefined;
            hitsPerPage?: number;
            page?: number;
        }
    ) => Promise<{ nbPages: number; hits: T[] }>;
} {
    const searchClient = algoliasearch(algoliaAppId, algoliaApiKey);
    const index = searchClient.initIndex(algoliaIndexName);

    return index;
}
