import { ANALYTICS_HOVER_PERIOD, emitCardHover, emitCardSearchHit } from "@facture/helpers";
import { useInterval } from "@facture/hooks";
import type { SearchHitType } from "@facture/types";
import Image from "next/image";
import Link from "next/link";

import { Type } from "./type";

interface Props {
    resultIndex: number;
    totalResults: number;
    query: string;
    hit: SearchHitType;
}

export function Card({ resultIndex, totalResults, query, hit }: Props) {
    const { start, stop } = useInterval(ANALYTICS_HOVER_PERIOD, () => emitCardHover("landing_search", ANALYTICS_HOVER_PERIOD, hit.manufacturer));

    const logoWidth = 50;
    const logoHeight = 50;

    const thumbnailWidth = 1000;
    const thumbnailHeight = 400;

    return (
        <Link href={`/manufacturers/${hit.manufacturer}`}>
            <a
                role="landing-search-card"
                onMouseEnter={start}
                onMouseLeave={stop}
                onClick={() => emitCardSearchHit("landing_search", hit.manufacturer, query, resultIndex + 1, totalResults)}
            >
                <div className="p-6 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow space-y-3 h-full">
                    <Image
                        role="landing-search-card-thumbnail"
                        className="rounded-md"
                        src={`${hit.thumbnail.url}?size=${thumbnailWidth}x${thumbnailHeight}`}
                        width={thumbnailWidth}
                        height={thumbnailHeight}
                    />
                    <div className="flex items-center justify-between">
                        <div className="mr-7">
                            <p role="landing-search-card-name" className="text-2xl font-bold text-gray-900 line-clamp-1">
                                {hit.name}
                            </p>
                            {hit.slogan && (
                                <p role="landing-search-card-slogan" className="text-xl font-bold text-gray-700 line-clamp-1">
                                    {hit.slogan}
                                </p>
                            )}
                        </div>
                        <Image
                            role="landing-search-card-logo"
                            className="rounded-md"
                            src={`${hit.logo.url}?size=${logoWidth}x${logoHeight}`}
                            width={logoWidth}
                            height={logoHeight}
                        />
                    </div>
                    <p role="landing-search-card-description" className="text-gray-700 text-lg line-clamp-2">
                        {hit.descriptionShort}
                    </p>
                    <Type type={hit.type} color={hit.color} />
                </div>
            </a>
        </Link>
    );
}

export default Card;
