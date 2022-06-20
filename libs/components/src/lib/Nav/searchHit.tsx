import { Manufacturer } from "@facture/types";

interface Props {
    hit: Manufacturer;
}

export function SearchHit({ hit: { descriptionShort } }: Props) {
    return <div>{descriptionShort}</div>;
}

export default SearchHit;
