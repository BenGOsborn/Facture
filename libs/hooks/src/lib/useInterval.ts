import { useEffect, useRef } from "react";

export function useInterval(period: number, callback: () => any) {
    const timer = useRef<NodeJS.Timer | null>(null);

    function start() {
        timer.current = setInterval(callback, period);
    }

    function stop() {
        if (timer.current) clearInterval(timer.current);
    }

    useEffect(() => {
        return stop;
    }, []);

    return { start, stop };
}

export default useInterval;
