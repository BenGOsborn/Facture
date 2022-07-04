import { ANALYTICS_HOVER_PERIOD, emitCardHover, emitCardSearchResults } from "@facture/helpers";
import { useInterval } from "@facture/hooks";
import { SearchHit as SearchHitType } from "@facture/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
    resultIndex: number;
    totalResults: number;
    query: string;
    hit: SearchHitType;
    onClick?: () => void;
}

export function SearchHit({ resultIndex, totalResults, query, hit, onClick }: Props) {
    const { start, stop } = useInterval(ANALYTICS_HOVER_PERIOD, () => emitCardHover("nav_search", ANALYTICS_HOVER_PERIOD, hit.manufacturer));

    const logoWidth = 50;
    const logoHeight = 50;

    return (
        <Link href={`/manufacturers/${hit.manufacturer}`}>
            <a
                role="search-hit"
                onClick={() => {
                    onClick && onClick();
                    emitCardSearchResults("nav_search", hit.manufacturer, query, resultIndex + 1, totalResults);
                }}
                onMouseEnter={start}
                onMouseLeave={stop}
            >
                <div className="p-6 hover:bg-gray-100 bg-white transition-colors rounded-md space-y-3 mt-3">
                    <div className="flex items-center justify-between space-x-5">
                        <Image
                            role="search-hit-logo"
                            className="rounded-md"
                            src={`${hit.logo.url}?size=${logoWidth}x${logoHeight}`}
                            width={logoWidth}
                            height={logoHeight}
                        />
                        <div className="text-right">
                            <p role="search-hit-name" className="text-right text-lg font-bold text-gray-900 line-clamp-1">
                                {hit.name}
                            </p>
                            {hit.slogan && (
                                <p role="search-hit-slogan" className="text-md font-bold text-gray-700 line-clamp-1">
                                    {hit.slogan}
                                </p>
                            )}
                        </div>
                    </div>
                    <p role="search-hit-description" className="text-gray-700 text-md line-clamp-3">
                        {hit.descriptionShort}
                    </p>
                </div>
            </a>
        </Link>
    );
}

export default SearchHit;
