import { emitFormHit } from "@facture/helpers";
import Link from "next/link";

import { RainbowText } from "../../RainbowText";
import { Search } from "./search";

export function Hero() {
    return (
        <header className="text-center space-y-14 xl:mx-auto xl:w-3/5">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 flex flex-col items-center">
                <span>Connecting</span>
                <span>
                    <RainbowText>Manufacturers</RainbowText>.
                </span>
                <span>Driving</span>
                <span>
                    <RainbowText>Innovation</RainbowText>.
                </span>
            </h1>
            <ul className="flex flex-col md:flex-row items-stretch md:items-center justify-center space-x-0 md:space-x-7 space-y-7 md:space-y-0">
                <div className="md:w-2/3">
                    <Search />
                </div>
                <Link href="https://forms.gle/59gjvMtDMJ6rmDbS7">
                    <a
                        className="p-6 bg-gray-200 hover:bg-gray-300 transition-colors text-lg rounded-md font-medium text-gray-700 md:w-1/3 min-w-max"
                        onClick={() => emitFormHit("landing_main_hero")}
                    >
                        Register Your Business
                    </a>
                </Link>
            </ul>
            <h2 className="text-xl font-medium text-gray-700">
                Facture is an online search directory for manufacturers with the intention of connecting manufacturers to aspiring entrepreneurs to drive local
                innovation.
            </h2>
        </header>
    );
}

export default Hero;
