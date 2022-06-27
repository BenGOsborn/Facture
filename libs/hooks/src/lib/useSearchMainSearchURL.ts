import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export function useSearchMainSearchURL(query: string, setQuery: (value: string) => void) {
    const router = useRouter();
    const finished = useRef<boolean>(false);

    // **** Now we have a problem where if the type is never found it will just not work ever

    useEffect(() => {
        if (finished.current) return;

        const search = router.query["search"];
        if (search && typeof search === "string") {
            finished.current = true;
            setQuery(decodeURI(search));
        }
    }, [router]);

    useEffect(() => {
        console.log(finished.current);

        if (!finished.current) return;

        if (query !== "") router.push("?search=" + encodeURI(query));
        else router.push("");
    }, [query]);
}

export default useSearchMainSearchURL;
