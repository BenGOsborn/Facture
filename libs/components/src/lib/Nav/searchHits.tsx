import { SearchHit as SearchHitType } from "@facture/types";

import SearchHit from "./searchHit";

interface Props {
    hits: SearchHitType[];
    onClick?: () => void;
}

export function SearchHits({ hits, onClick }: Props) {
    if (hits.length > 0)
        return (
            <div className="absolute z-50 rounded-md bg-white p-6 shadow-md">
                <p className="font-bold text-gray-800">Results</p>
                {hits.map((hit, index) => (
                    <SearchHit key={index} hit={hit} onClick={onClick} />
                ))}
            </div>
        );

    return null;
}

export default SearchHits;
