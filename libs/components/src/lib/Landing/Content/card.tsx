import { SearchHit } from "@facture/types";
import Image from "next/image";
import Link from "next/link";
import Badge from "../../Badge";

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
                <div className="rounded-md shadow-md">
                    <Image
                        className="rounded-md"
                        src={`${hit.thumbnail.url}?size=${thumbnailWidth}x${thumbnailHeight}`}
                        width={thumbnailWidth}
                        height={thumbnailHeight}
                    />
                    <div className="p-6 space-y-3">
                        <div className="flex items-center justify-between space-x-3">
                            <Image className="rounded-md" src={`${hit.logo.url}?size=${logoWidth}x${logoHeight}`} width={logoWidth} height={logoHeight} />
                            <div className="text-right">
                                <p className="text-right text-2xl font-bold text-gray-900">{hit.name}</p>
                                {hit.slogan && <p className="text-xl font-bold text-gray-700">{hit.slogan}</p>}
                            </div>
                        </div>
                        <p className="text-gray-700 text-lg line-clamp-3">{hit.descriptionShort}</p>
                        <div className="flex justify-center flex-wrap">
                            {hit.type &&
                                hit.type.slice(0, 4).map((type, index) => (
                                    <Badge color={hit.color} key={index}>
                                        {type}
                                    </Badge>
                                ))}
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default Card;
