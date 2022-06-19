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
            <div className="flex items-center space-x-6">
                <button className="font-bold text-gray-700 hover:text-gray-900 transition-all" onClick={() => setSelected((prev) => prev - 1)}>
                    {"<"}
                </button>
                <AnimatePresence>
                    <motion.div key={selected} initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
                        {element[mod(selected, element.length)]}
                    </motion.div>
                </AnimatePresence>
                <button className="font-bold text-gray-700 hover:text-gray-900 transition-all" onClick={() => setSelected((prev) => prev + 1)}>
                    {">"}
                </button>
            </div>
        );

    return null;
}

export default Carousel;
