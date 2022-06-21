import { Search } from "tabler-icons-react";

interface Props {
    onChange: (value: string) => void;
}

export function SearchBar({ onChange }: Props) {
    return (
        <div className="rounded-md bg-gray-50 border-2 border-gray-300 flex items-center space-x-3 text-gray-700 px-6 py-3 w-full xl:w-3/5 mx-auto">
            <label htmlFor="search-hero">
                <Search />
            </label>
            <input
                id="search-hero"
                type="text"
                className="bg-gray-50 border-none font-medium text-xl rounded-md w-full"
                placeholder="Search"
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
