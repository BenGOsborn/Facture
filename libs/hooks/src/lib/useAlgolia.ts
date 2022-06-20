import { mod } from "@facture/helpers";
import { useState } from "react";

export function useAlgolia(size: number, initialSelected: number) {
    const [tuple, setTuple] = useState([0, initialSelected]);

    const setSelected = (selected: (prev: number) => number) => {
        setTuple((oldTuple) => {
            const newSelected = selected(oldTuple[1]);

            return [oldTuple[1], newSelected];
        });
    };

    const direction: "increasing" | "decreasing" = tuple[1] > tuple[0] ? "increasing" : "decreasing";

    return { direction, selected: mod(tuple[1], size), setSelected };
}

export default useAlgolia;
