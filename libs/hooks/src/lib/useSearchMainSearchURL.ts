import { useRouter } from "next/router";
import { useEffect } from "react";

export function useSearchMainSearchURL(query: string, setQuery: (value: string) => void) {
    const router = useRouter();

    useEffect(() => {
        const queryParam = router.query;
        const search = queryParam["search"];
        if (search && typeof search === "string") setQuery(decodeURI(search));

        console.log("Hit");
    }, [router]);

    // useEffect(() => {
    //     if (query !== "") Router.push("?search=" + encodeURI(query));
    //     else Router.push("");

    //     console.log("Query change !?!?!");
    // }, [query]);
}

export default useSearchMainSearchURL;
