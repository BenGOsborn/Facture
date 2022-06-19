import { mod } from "@facture/helpers";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Props {
    element: JSX.Element[];
}

export function Carousel({ element }: Props) {
    const [selected, setSelected] = useState(0);

    if (element.length > 0)
        return (
            <>
                <button onClick={() => setSelected((prev) => prev - 1)}>Prev</button>
                <AnimatePresence>
                    <motion.div key={selected} initial={{ x: 100 }} animate={{ x: 0 }} exit={{ x: -100 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
                        {element[mod(selected, element.length)]}
                    </motion.div>
                </AnimatePresence>
                <button onClick={() => setSelected((prev) => prev + 1)}>Next</button>
            </>
        );

    return null;
}

export default Carousel;
