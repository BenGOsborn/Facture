import { Logo } from "../../Logo";
import { Search } from "../../Search";

export function NavMain() {
    return (
        <nav className="p-6 bg-gray-800">
            <ul className="flex flex-col md:flex-row justify-center md:justify-between items-center w-5/6 mx-auto space-y-4 md:space-y-0">
                <li>
                    <Logo />
                </li>
                <li>
                    <Search />
                </li>
            </ul>
        </nav>
    );
}

export default NavMain;
