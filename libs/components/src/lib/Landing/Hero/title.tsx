import { motion } from "framer-motion";

export function Title() {
    return (
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900">
            Find A{" "}
            <motion.span
                animate={{ color: ["#dc2626", "#ea580c", "#ca8a04", "#16a34a", "#0284c7", "#4f46e5", "#7c3aed", "#c026d3", "#be123c"] }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            >
                Manufacturer
            </motion.span>
        </h1>
    );
}

export default Title;
