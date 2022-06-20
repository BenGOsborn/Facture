import { Search } from "tabler-icons-react";

interface Props {
    onChange: (value: string) => void;
}

export function SearchBar({ onChange }: Props) {
    return (
        <div className="rounded-md bg-gray-900 flex items-center space-x-3 text-white px-4 py-2">
            <label htmlFor="search">
                <Search />
            </label>
            <input
                id="search"
                type="text"
                className="bg-gray-900 border-none font-medium rounded-md w-full"
                placeholder="Search"
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
