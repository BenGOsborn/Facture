import { useEffect, useState } from "react";

interface Props {}

export function Title({}: Props) {
    const [stage, setStage] = useState<number>(0);

    // **** We will use framer motion to animate this color change

    useEffect(() => {
        setInterval(() => setStage((prev) => prev + 1), 1000);
    }, []);

    return (
        <header className="p-6 bg-white rounded-md shadow-md flex flex-col items-center text-center">
            <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-gray-900">
                Find A <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-400">Manufacturer</span>
            </h1>
        </header>
    );
}

export default Title;
