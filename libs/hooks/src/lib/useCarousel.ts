import { mod } from "@facture/helpers";
import { useState } from "react";

export function useCarousel(size: number) {
    const [selected, setSelected] = useState(0);
    const [tuple, setTuple] = useState([null, selected]);

    if (tuple[1] !== selected) setTuple((prev) => [prev[1], selected]);

    const direction: "increasing" | "decreasing" = tuple[0] && selected > tuple[0] ? "increasing" : "decreasing";

    return { direction, selected: mod(selected, size), setSelected };
}

export default useCarousel;
