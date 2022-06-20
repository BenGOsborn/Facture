import { SearchHit as SearchHitType } from "@facture/types";

import SearchHit from "./searchHit";

interface Props {
    hits: SearchHitType[];
}

export function SearchHits({ hits }: Props) {
    return (
        <div className="spae-y-3 rounded-md bg-white p-6">
            {hits.map((hit, index) => (
                <SearchHit key={index} hit={hit} />
            ))}
        </div>
    );
}

export default SearchHits;
