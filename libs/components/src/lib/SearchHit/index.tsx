import { Manufacturer } from "@facture/types";
import { Hits, SearchBox } from "react-instantsearch-hooks-web";
import { Search as SearchIcon } from "tabler-icons-react";

interface Props {
    hit: Manufacturer;
}

export function SearchHit({ hit: { descriptionShort } }: Props) {
    return <div>{descriptionShort}</div>;
}

export default SearchHit;
