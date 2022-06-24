import { ColorDisplay } from "@facture/types";

import { Badge } from "../../Badge";

interface Props {
    type: string[];
    color: ColorDisplay;
}

export function Type({ type, color }: Props) {
    if (type.length > 0)
        return (
            <div role="type" className="flex justify-between items-center flex-wrap">
                {type.slice(0, 4).map((type, index) => (
                    <Badge color={color} key={index} text={type} />
                ))}
            </div>
        );

    return null;
}

export default Type;
