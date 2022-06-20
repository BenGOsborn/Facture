import Link from "next/link";
import { Search as SearchIcon } from "tabler-icons-react";

export function Search() {
    return (
        <Link href="/">
            <a className="flex items-center space-x-3 bg-gray-900 px-4 py-2 rounded-md text-lg font-medium text-white cursor-pointer">
                <span>
                    <SearchIcon />
                </span>
                <span>Search</span>
            </a>
        </Link>
    );
}

export default Search;
