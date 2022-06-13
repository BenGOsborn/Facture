import ReactMarkdown from "react-markdown";

interface Props {
    description: string;
}

export function DescriptionLong({ description }: Props) {
    return <ReactMarkdown className="prose">{description}</ReactMarkdown>;
}

export default DescriptionLong;
