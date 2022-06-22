import { useCarousel } from "@facture/hooks";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
    element: JSX.Element[];
    shiftSize: number;
}

export function Carousel({ element, shiftSize }: Props) {
    const { position, selected, incSelected, decSelected } = useCarousel(element.length, shiftSize);

    if (element.length > 0)
        return (
            <div className="flex items-center justify-between space-x-3">
                {element.length > 1 && (
                    <button className="font-bold text-gray-700 hover:text-gray-900 transition-colors bg-gray-100 hover:bg-gray-200 p-3 rounded-xl" onClick={decSelected}>
                        {"<"}
                    </button>
                )}
                <div className="flex-auto overflow-hidden">
                    <AnimatePresence exitBeforeEnter={true}>
                        <motion.div
                            key={selected}
                            initial={{ x: position[0] }}
                            animate={{ x: 0 }}
                            exit={{ x: position[1] }}
                            transition={{ type: "spring", duration: 0.2 }}
                        >
                            {element[selected]}
                        </motion.div>
                    </AnimatePresence>
                </div>
                {element.length > 1 && (
                    <button className="font-bold text-gray-700 hover:text-gray-900 transition-colors bg-gray-100 hover:bg-gray-200 p-3 rounded-xl" onClick={incSelected}>
                        {">"}
                    </button>
                )}
            </div>
        );

    return null;
}

export default Carousel;
