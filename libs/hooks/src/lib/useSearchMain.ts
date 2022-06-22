import useSearchMainQuery from "./useSearchMainQuery";
import useSearchMainSearch from "./useSearchMainSearch";

export function useSearchMain(algoliaAppId: string, algoliaApiKey: string, algoliaIndexName: string, pageSize: number) {
    const { data: queryData, loadMore: loadMoreQuery } = useSearchMainQuery(pageSize);
    const { data: searchData, loadMore: loadMoreSearch, query, setQuery } = useSearchMainSearch(algoliaAppId, algoliaApiKey, algoliaIndexName, pageSize);

    return {
        data: searchData || queryData,
        loadMore: searchData ? loadMoreSearch : loadMoreQuery,
        query,
        setQuery,
    };
}

export default useSearchMain;
