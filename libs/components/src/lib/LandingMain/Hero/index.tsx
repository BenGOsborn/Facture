import Link from "next/link";

import { Search } from "./search";

export function Hero() {
    return (
        <header className="text-center space-y-14 xl:mx-auto xl:w-3/5">
            <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold text-gray-900">Connecting Manufacturers. Driving Innovation.</h1>
            <div className="space-y-3">
                <ul className="flex flex-col md:flex-row items-stretch md:items-center justify-center space-x-0 md:space-x-7 space-y-3 md:space-y-0">
                    <div className="md:w-2/3">
                        <Search />
                    </div>
                    <Link href="https://forms.gle/59gjvMtDMJ6rmDbS7">
                        <a className="p-6 bg-gray-300 hover:bg-gray-400 transition-colors text-lg rounded-md font-medium text-gray-700 md:w-1/3 min-w-max">
                            Register Your Business
                        </a>
                    </Link>
                </ul>
                <p className="text-left text-gray-700 font-medium text-lg">Completely free. No sign up required.</p>
            </div>
            <h2 className="text-md md:text-xl font-medium text-gray-700">
                Facture is an online search directory connecting manufacturers to aspiring entrepreneurs to drive local innovation.
            </h2>
        </header>
    );
}

export default Hero;
