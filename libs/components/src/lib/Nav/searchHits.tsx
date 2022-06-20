import { SearchHit as SearchHitType } from "@facture/types";

import SearchHit from "./searchHit";

interface Props {
    hits: SearchHitType[];
}

export function SearchHits({ hits }: Props) {
    if (hits.length > 0)
        return (
            <div className="space-y-3 rounded-md bg-white p-6 shadow-md">
                {hits.map((hit, index) => (
                    <SearchHit key={index} hit={hit} />
                ))}
            </div>
        );

    return null;
}

export default SearchHits;
