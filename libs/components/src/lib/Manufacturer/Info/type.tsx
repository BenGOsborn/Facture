import { FindManufacturerQuery } from "@facture/types";

import Badge from "../../Badge";

interface Props {
    type: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["type"];
    color: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["color"];
}

export function Type({ type, color }: Props) {
    if (type)
        return (
            <div className="w-2/3 space-y-2">
                <p className="font-bold text-gray-900">Tags</p>
                <div className="flex justify-start flex-wrap">
                    {type.map((type, index) => (
                        <Badge color={color} key={index}>
                            {type.type}
                        </Badge>
                    ))}
                </div>
            </div>
        );

    return null;
}

export default Type;
