import { mod } from "@facture/helpers";
import { useCarousel } from "@facture/hooks";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
    element: JSX.Element[];
}

export function Carousel({ element }: Props) {
    const {} = useCarousel();

    if (element.length > 0)
        return (
            <div className="flex items-center space-x-6">
                <button className="font-bold text-gray-700 hover:text-gray-900 transition-all" onClick={() => setSelected((prev) => prev - 1)}>
                    {"<"}
                </button>
                <div className="flex items-center justify-center overflow-hidden">
                    <AnimatePresence>
                        <motion.div
                            key={selected}
                            initial={{ x: 1000 }}
                            animate={{ x: 0 }}
                            exit={{ x: -1000 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        >
                            {element[mod(selected, element.length)]}
                        </motion.div>
                    </AnimatePresence>
                </div>
                <button className="font-bold text-gray-700 hover:text-gray-900 transition-all" onClick={() => setSelected((prev) => prev + 1)}>
                    {">"}
                </button>
            </div>
        );

    return null;
}

export default Carousel;
