import { FindManufacturerQuery } from "@facture/types";

import Badge from ".";

interface Props {
    types: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["type"];
    color: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["color"];
}

export function Type({ types, color }: Props) {
    return <div className="flex justify-start flex-wrap">{types && types.map((type, index) => <Badge key={index}>{type.type}</Badge>)}</div>;
}

export default Type;
