import Link from "next/link";

import { Search } from "tabler-icons-react";

import Logo from "./logo";

export function Nav() {
    return (
        <nav className="p-6 mb-14 shadow-md bg-white">
            <ul className="flex justify-between items-center w-5/6 mx-auto ">
                <li>
                    <Logo />
                </li>
                <li>
                    <Link href="/">
                        <div className="flex">
                            <a className="flex items-center space-x-3 bg-gradient-to-r from-green-400 to-blue-500 hover:to-green-400 px-4 py-2 rounded-md text-lg font-medium text-white cursor-pointer">
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
