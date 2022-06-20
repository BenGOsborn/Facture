import Logo from "./logo";
import Search from "./search";

export function Nav() {
    return (
        <nav className="p-6 mb-14 shadow-md bg-gray-800">
            <ul className="flex justify-between items-center w-5/6 mx-auto ">
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

export default Nav;
