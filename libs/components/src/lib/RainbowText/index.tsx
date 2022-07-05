import { motion } from "framer-motion";

interface Props {
    children: any;
}

export function RainbowText({ children }: Props) {
    return (
        <motion.span
            animate={{ color: ["#dc2626", "#ea580c", "#ca8a04", "#16a34a", "#0284c7", "#4f46e5", "#7c3aed", "#c026d3", "#be123c"] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
            {children}
        </motion.span>
    );
}

export default RainbowText;
