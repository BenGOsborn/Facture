import { Manufacturer } from "@facture/types";

import SearchHit from "./searchHit";

interface Props {
    hits: Manufacturer[];
}

export function SearchHits({ hits }: Props) {
    return (
        <div className="absolute">
            {hits.map((hit, index) => (
                <SearchHit key={index} hit={hit} />
            ))}
        </div>
    );
}

export default SearchHits;
