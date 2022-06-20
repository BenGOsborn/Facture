import Link from "next/link";
import { SearchBox } from "react-instantsearch-hooks-web";
import { Search as SearchIcon } from "tabler-icons-react";

export function Search() {
    return (
        <>
            <SearchBox />
            <Link href="/">
                <a className="flex items-center space-x-3 text-white bg-gray-900 px-4 py-2 rounded-md">
                    <span>
                        <SearchIcon />
                    </span>
                    <span className="text-lg font-medium">Search</span>
                </a>
            </Link>
        </>
    );
}

export default Search;
