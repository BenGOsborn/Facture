import Link from "next/link";

import { Search } from "tabler-icons-react";

import Logo from "./logo";

export function Nav() {
    return (
        <nav className="px-4 py-8 mb-6 border-b border-gray-200">
            <ul className="flex justify-between items-center ">
                <li>
                    <Logo />
                </li>
                <li>
                    <Link href="/">
                        <div className="flex">
                            <a className="flex items-center space-x-3 bg-gradient-to-r from-green-400 to-blue-500 px-6 py-3 rounded-md text-lg font-medium text-white cursor-pointer">
                                <span>
                                    <Search />
                                </span>
                                <span>Search</span>
                            </a>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
