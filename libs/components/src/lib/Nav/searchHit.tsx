import { emitCardHover } from "@facture/helpers";
import { useInterval } from "@facture/hooks";
import { SearchHit as SearchHitType } from "@facture/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
    hit: SearchHitType;
    onClick?: () => void;
}

export function SearchHit({ hit, onClick }: Props) {
    const period = 1000;
    const { start, stop } = useInterval(period, () => emitCardHover("nav_search", period, hit.manufacturer));

    const logoWidth = 50;
    const logoHeight = 50;

    return (
        <Link href={`/manufacturers/${hit.manufacturer}`}>
            <a onClick={onClick} onMouseEnter={start} onMouseLeave={stop}>
                <div className="p-6 hover:bg-gray-100 transition-colors rounded-md space-y-3 mt-3">
                    <div className="flex items-center justify-between space-x-3">
                        <Image className="rounded-md" src={`${hit.logo.url}?size=${logoWidth}x${logoHeight}`} width={logoWidth} height={logoHeight} />
                        <div className="text-right">
                            <p className="text-right text-lg font-bold text-gray-900 line-clamp-1">{hit.name}</p>
                            {hit.slogan && <p className="text-md font-bold text-gray-700 line-clamp-1">{hit.slogan}</p>}
                        </div>
                    </div>
                    <p className="text-gray-700 text-md line-clamp-3">{hit.descriptionShort}</p>
                </div>
            </a>
        </Link>
    );
}

export default SearchHit;
