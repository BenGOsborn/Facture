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

    return (
        <Link href={`/manufacturers/${hit.manufacturer}`}>
            <a>
                <div className="p-3 hover:bg-gray-100 rounded-md space-y-3 mt-3">
                    <div className="flex items-center justify-between space-x-3">
                        <Image className="rounded-md" src={`${hit.logo.url}?size=${logoWidth}x${logoHeight}`} width={logoWidth} height={logoHeight} />
                        <div className="text-right">
                            <p className="text-right text-2xl font-bold text-gray-900">{hit.name}</p>
                            {hit.slogan && <p className="text-xl font-bold text-gray-700">{hit.slogan}</p>}
                        </div>
                    </div>
                    <p className="text-gray-700 text-lg line-clamp-3">{hit.descriptionShort}</p>
                    <div className="flex justify-start flex-wrap">
                        {hit.type &&
                            hit.type.map((type, index) => (
                                <Badge color={hit.color} key={index}>
                                    {type}
                                </Badge>
                            ))}
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default Card;
