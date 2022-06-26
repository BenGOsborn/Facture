import { useRouter } from "next/router";
import { useEffect } from "react";

export function useSearchMainSearchURL(query: string, setQuery: (value: string) => void) {
    const router = useRouter();

    // **** So I want to integrate this into my workflow but I do not want it to continuously update my query param

    useEffect(() => {
        const search = router.query["search"];
        if (search && typeof search === "string") setQuery(decodeURI(search));
    }, [router]);

    useEffect(() => {
        if (query !== "") router.push("?search=" + encodeURI(query));
        else router.push("");
    }, [query]);
}

export default useSearchMainSearchURL;
