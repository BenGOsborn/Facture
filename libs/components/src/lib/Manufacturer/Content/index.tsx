import { ImageDisplay } from "@facture/types";
import ReactMarkdown from "react-markdown";

interface Props {
    description: string;
    thumbnail: ImageDisplay;
}

export function Content({ description, thumbnail }: Props) {
    const thumbnailWidth = 2000;
    const thumbnailHeight = 500;

    return (
        <div className="shadow-md rounded-md bg-white">
            <img className="rounded-md" src={`${thumbnail.url}?size=${thumbnailWidth}x${thumbnailHeight}`} width={thumbnailWidth} height={thumbnailHeight} />
            <ReactMarkdown className="p-6 prose max-w-3xl">{description}</ReactMarkdown>
        </div>
    );
}

export default Content;
