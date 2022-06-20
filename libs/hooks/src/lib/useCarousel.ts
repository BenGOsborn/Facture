import { mod } from "@facture/helpers";
import { useEffect, useMemo, useState } from "react";

export function useCarousel(size: number, shiftSize: number) {
    const [selected, setSelected] = useState<number>(0);
    const [tuple, setTuple] = useState<[number, number]>([0, 0]);

    const [position, setPosition] = useState<[number, number]>([shiftSize, -1 * shiftSize]);

    useEffect(() => {
        if (selected > tuple[1]) setPosition([-1 * shiftSize, shiftSize]);
        else setPosition([shiftSize, -1 * shiftSize]);
    }, [selected]);

    useEffect(() => {
        setTuple((prev) => [prev[1], selected]);
    }, [position]);

    const incSelected = () => setSelected((prev) => prev + 1);
    const decSelected = () => setSelected((prev) => prev - 1);

    const selectedOut = useMemo(() => mod(tuple[1], size), [tuple]);

    return { position, selected: selectedOut, incSelected, decSelected };
}

export default useCarousel;
