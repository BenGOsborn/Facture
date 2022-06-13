import { FindManufacturerQuery } from "@facture/graphql";
import ReactMarkdown from "react-markdown";

interface Props {
    description: FindManufacturerQuery["manufacturer"]["data"]["attributes"]["descriptionLong"];
}

export function DescriptionLong({ description }: Props) {
    return <ReactMarkdown className="prose max-w-full">{description}</ReactMarkdown>;
}

export default DescriptionLong;
