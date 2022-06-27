import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export function useSearchMainSearchURL(query: string, setQuery: (value: string) => void) {
    const router = useRouter();
    const finished = useRef<boolean>(false);

    useEffect(() => {
        setTimeout(() => (finished.current = true), 250);
    }, []);

    useEffect(() => {
        if (finished.current) return;

        const search = router.query["search"];
        if (search && typeof search === "string") {
            finished.current = true;
            setQuery(decodeURI(search));
        }
    }, [router]);

    useEffect(() => {
        if (!finished.current) return;

        if (query !== "") history.pushState(null, "", window.location.pathname + "?search=" + encodeURI(query));
        else history.pushState(null, "", window.location.pathname);
    }, [query]);
}

export default useSearchMainSearchURL;
