import { useRouter } from "next/router";
import { Search as SearchIcon } from "tabler-icons-react";

export function Search() {
    const router = useRouter();

    return (
        <form
            className="rounded-md bg-gray-900 flex items-center space-x-3 text-white p-4"
            onSubmit={(e) => {
                console.log(e.target.query);
                e.preventDefault();
                // router.push(`/search?q=${encodeURI()}`);
            }}
        >
            <label htmlFor="search-landing-main">
                <SearchIcon />
            </label>
            <input
                name="query"
                id="search-landing-main"
                type="text"
                className="bg-gray-900 border-none font-medium rounded-md w-full"
                placeholder="Find A Manufacturer"
            />
        </form>
    );
}

export default Search;
