import { Badge } from "../../Badge";

interface Props {
    type?: string[];
    color: string;
}

export function Type({ type, color }: Props) {
    return (
        <div className="flex justify-between items-center flex-wrap">
            {type &&
                type.slice(0, 4).map((type, index) => (
                    <Badge color={color} key={index}>
                        {type}
                    </Badge>
                ))}
        </div>
    );
}

export default Type;
