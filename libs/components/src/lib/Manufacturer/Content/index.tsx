import { ANALYTICS_HOVER_PERIOD, emitSectionHover } from "@facture/helpers";
import { useInterval } from "@facture/hooks";
import { ManufacturerImageType } from "@facture/types";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface Props {
    description: string;
    thumbnail: ManufacturerImageType;
}

export function Content({ description, thumbnail }: Props) {
    const { start, stop } = useInterval(ANALYTICS_HOVER_PERIOD, () => emitSectionHover("content", ANALYTICS_HOVER_PERIOD));

    const thumbnailWidth = 2000;
    const thumbnailHeight = 500;

    return (
        <div className="shadow-md rounded-md bg-white p-6" onMouseEnter={start} onMouseLeave={stop}>
            <Image
                className="rounded-md"
                src={`${thumbnail.url}?size=${thumbnailWidth}x${thumbnailHeight}`}
                width={thumbnailWidth}
                height={thumbnailHeight}
                priority={true}
            />
            <ReactMarkdown className="mt-6 prose max-w-3xl">{description}</ReactMarkdown>
        </div>
    );
}

export default Content;
