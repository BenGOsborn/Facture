import { Search } from "tabler-icons-react";
import { useRouter } from "next/router";

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: Props) {
    const router = useRouter();

    return (
        <form
            role="search-bar-form"
            className="rounded-md bg-gray-900 flex items-center space-x-3 text-white px-4 py-2"
            onSubmit={(e) => {
                e.preventDefault();
                router.push(`/search?q=${encodeURI(value)}`);
                onChange("");
            }}
        >
            <label htmlFor="search-nav">
                <Search />
            </label>
            <input
                role="search-bar-input"
                id="search-nav"
                type="text"
                className="bg-gray-900 border-none font-medium rounded-md w-full"
                placeholder="Search"
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
            />
        </form>
    );
}

export default SearchBar;
