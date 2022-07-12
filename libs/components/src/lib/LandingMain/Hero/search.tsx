import { useRouter } from "next/router";

export function Search() {
    const router = useRouter();

    return (
        <form
            role="search-landing-main-form"
            className="rounded-md bg-gray-900 flex items-center space-x-3 text-white p-4"
            onSubmit={(e) => {
                e.preventDefault();
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const query = e.target.query.value;
                router.push(`/search?q=${encodeURI(query)}`);
            }}
        >
            <input name="query" type="text" className="bg-gray-900 border-none font-medium rounded-md w-full" placeholder="Find A Manufacturer..." />
        </form>
    );
}

export default Search;
