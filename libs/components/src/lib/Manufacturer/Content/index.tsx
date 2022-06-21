import { Image as ImageType } from "@facture/types";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface Props {
    description: string;
    thumbnail: ImageType;
}

export function Content({ description, thumbnail }: Props) {
    const thumbnailWidth = 1920;
    const thumbnailHeight = 500;

    return (
        <div className="shadow-md rounded-md bg-white">
            <Image className="rounded-md" src={`${thumbnail.url}?size=${thumbnailWidth}x${thumbnailHeight}`} width={thumbnailWidth} height={thumbnailHeight} />
            <ReactMarkdown className="p-6 prose max-w-3xl">{description}</ReactMarkdown>
        </div>
    );
}

export default Content;
