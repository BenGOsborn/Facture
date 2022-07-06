import type { SearchHitType } from "@facture/types";

import { SearchHit } from "./searchHit";

interface Props {
    query: string;
    hits: SearchHitType[];
    onClick?: () => void;
}

export function SearchHits({ query, hits, onClick }: Props) {
    return (
        <div className="absolute z-50 rounded-md bg-white p-6 shadow-md w-full">
            {hits.length > 0 ? (
                <>
                    <p className="font-bold text-base text-gray-800">Results</p>
                    {hits.map((hit, index) => (
                        <SearchHit resultIndex={index} totalResults={hits.length} query={query} key={index} hit={hit} onClick={onClick} />
                    ))}
                </>
            ) : (
                <p className="font-bold text-lg text-gray-800">No results found</p>
            )}
        </div>
    );
}

export default SearchHits;
