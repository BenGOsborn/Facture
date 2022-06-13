import Link from "next/link";
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
                        <a className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-3 rounded-md text-lg font-medium text-white">Search</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
