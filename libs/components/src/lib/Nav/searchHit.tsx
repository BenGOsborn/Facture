import { SearchHit as SearchHitType } from "@facture/types";
import Image from "next/image";

interface Props {
    hit: SearchHitType;
}

export function SearchHit({ hit }: Props) {
    const logoWidth = 50;
    const logoHeight = 50;

    return (
        <>
            <div className="flex items-center justify-between space-x-3">
                <Image src={`${hit.logo.url}?size=${logoWidth}x${logoHeight}`} width={logoWidth} height={logoHeight} />
                <p className="text-right text-lg font-bold text-gray-900">{hit.name}</p>
            </div>
            <p className="text-gray-700 text-md line-clamp-3">{hit.descriptionShort}</p>
        </>
    );
}

export default SearchHit;
