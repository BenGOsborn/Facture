import { FindManufacturerQuery } from "@facture/graphql";
import ReactMarkdown from "react-markdown";

interface Props {
    description: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["descriptionLong"];
}

export function DescriptionLong({ description }: Props) {
    return (
        <div className="pb-6 mb-6 border-b border-gray-200">
            <h2 className="font-bold text-gray-400 text-xl mb-4">About</h2>
            <ReactMarkdown className="prose max-w-full">{description}</ReactMarkdown>
        </div>
    );
}

export default DescriptionLong;
