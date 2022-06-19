import { FindManufacturerQuery } from "@facture/types";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface Props {
    description: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["descriptionLong"];
    thumbnail: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["thumbnail"];
}

export function Content({ description, thumbnail }: Props) {
    const thumbnailWidth = 1920;
    const thumbnailHeight = 500;

    return (
        <div className="shadow-md rounded-md">
            <Image
                className="rounded-md"
                src={`${thumbnail.data.attributes.url}?size=${thumbnailWidth}x${thumbnailHeight}`}
                width={thumbnailWidth}
                height={thumbnailHeight}
            />
            <ReactMarkdown className="p-6 prose max-w-3xl">{description}</ReactMarkdown>
        </div>
    );
}

export default Content;
