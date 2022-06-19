import { AnimatePresence, motion } from "framer-motion";

interface Props {}

export function Carousel({}: Props) {
    return (
        <AnimatePresence>
            <motion.div></motion.div>
        </AnimatePresence>
    );
}

export default Carousel;
