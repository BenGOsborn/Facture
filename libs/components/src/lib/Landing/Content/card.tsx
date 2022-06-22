import { SearchHit } from "@facture/types";
import Image from "next/image";
import Link from "next/link";

import { Type } from "./type";

interface Props {
    hit: SearchHit;
}

export function Card({ hit }: Props) {
    const logoWidth = 50;
    const logoHeight = 50;

    const thumbnailWidth = 1000;
    const thumbnailHeight = 500;

    return (
        <Link href={`/manufacturers/${hit.manufacturer}`}>
            <a>
                <div className="p-6 rounded-md shadow-md hover:shadow-lg transition-shadow space-y-3 h-full">
                    <Image
                        className="rounded-md"
                        src={`${hit.thumbnail.url}?size=${thumbnailWidth}x${thumbnailHeight}`}
                        width={thumbnailWidth}
                        height={thumbnailHeight}
                    />
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{hit.name}</p>
                            {hit.slogan && <p className="text-xl font-bold text-gray-700">{hit.slogan}</p>}
                        </div>
                        <Image className="rounded-md" src={`${hit.logo.url}?size=${logoWidth}x${logoHeight}`} width={logoWidth} height={logoHeight} />
                    </div>
                    <p className="text-gray-700 text-lg line-clamp-3">{hit.descriptionShort}</p>
                    <Type type={hit.type} color={hit.color} />
                </div>
            </a>
        </Link>
    );
}

export default Card;
