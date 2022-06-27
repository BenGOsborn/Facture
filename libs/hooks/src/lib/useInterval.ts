export function useInterval(period: number, callback: () => any) {
    let timer: NodeJS.Timer;

    function start() {
        timer = setInterval(callback, period);
    }

    function stop() {
        clearInterval(timer);
    }

    return { start, stop };
}

export default useInterval;
