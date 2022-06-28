import { ANALYTICS_HOVER_PERIOD, emitCardHover } from "@facture/helpers";
import { useInterval } from "@facture/hooks";
import { SearchHit } from "@facture/types";
import Image from "next/image";
import Link from "next/link";

import { Type } from "./type";

interface Props {
    hit: SearchHit;
}

export function Card({ hit }: Props) {
    const { start, stop } = useInterval(ANALYTICS_HOVER_PERIOD, () => emitCardHover("landing_search", ANALYTICS_HOVER_PERIOD, hit.manufacturer));

    const logoWidth = 50;
    const logoHeight = 50;

    const thumbnailWidth = 1000;
    const thumbnailHeight = 400;

    return (
        <Link href={`/manufacturers/${hit.manufacturer}`}>
            <a role="card" onMouseEnter={start} onMouseLeave={stop}>
                <div className="p-6 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow space-y-3 h-full">
                    <Image
                        role="card-thumbnail"
                        className="rounded-md"
                        src={`${hit.thumbnail.url}?size=${thumbnailWidth}x${thumbnailHeight}`}
                        width={thumbnailWidth}
                        height={thumbnailHeight}
                    />
                    <div className="flex items-center justify-between">
                        <div>
                            <p role="card-name" className="text-2xl font-bold text-gray-900 line-clamp-1">
                                {hit.name}
                            </p>
                            {hit.slogan && (
                                <p role="card-slogan" className="text-xl font-bold text-gray-700 line-clamp-1">
                                    {hit.slogan}
                                </p>
                            )}
                        </div>
                        <Image role="card-logo" className="rounded-md" src={`${hit.logo.url}?size=${logoWidth}x${logoHeight}`} width={logoWidth} height={logoHeight} />
                    </div>
                    <p role="card-description" className="text-gray-700 text-lg line-clamp-2">
                        {hit.descriptionShort}
                    </p>
                    <Type type={hit.type} color={hit.color} />
                </div>
            </a>
        </Link>
    );
}

export default Card;
