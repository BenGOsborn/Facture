import { useCarousel } from "@facture/hooks";
import { motion } from "framer-motion";

interface Props {
    element: JSX.Element[];
}

export function Carousel({ element }: Props) {
    const { direction, selected, setSelected } = useCarousel(element.length, 0);

    const shiftSize = 1000;

    if (element.length > 0)
        return (
            <div className="flex items-center justify-center space-x-6">
                <button
                    className="font-bold text-gray-700 hover:text-gray-900 transition-all bg-gray-100 hover:bg-gray-200 p-3 rounded-xl"
                    onClick={() => setSelected((prev) => prev - 1)}
                >
                    {"<"}
                </button>
                <div className="flex items-center justify-center overflow-hidden">
                    <motion.div
                        key={selected}
                        initial={{ x: direction === "increasing" ? shiftSize : -1 * shiftSize }}
                        animate={{ x: 0 }}
                        exit={{ x: direction === "increasing" ? -1 * shiftSize : shiftSize }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        {element[selected]}
                    </motion.div>
                </div>
                <button
                    className="font-bold text-gray-700 hover:text-gray-900 transition-all bg-gray-100 hover:bg-gray-200 p-3 rounded-xl"
                    onClick={() => setSelected((prev) => prev + 1)}
                >
                    {">"}
                </button>
            </div>
        );

    return null;
}

export default Carousel;
