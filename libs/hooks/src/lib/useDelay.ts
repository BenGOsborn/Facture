import { useEffect, useRef } from "react";

export function useDelay(trigger: any, callback: () => void, delay: number) {
    const timeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (timeout.current) clearTimeout(timeout.current);
        timeout.current = setTimeout(callback, delay);

        return () => {
            timeout.current && clearTimeout(timeout.current);
        };
    }, [trigger]);
}

export default useDelay;
