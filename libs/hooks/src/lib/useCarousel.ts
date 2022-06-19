import { useState } from "react";

export function useCarousel() {
    const [selected, setSelected] = useState(0);
    const [tuple, setTuple] = useState([null, selected]);

    if (tuple[1] !== selected) setTuple((prev) => [prev[1], selected]);

    const direction = tuple[0] && selected > tuple[0] ? "increasing" : "decreasing";

    return { direction, selected, setSelected };
}

export default useCarousel;
