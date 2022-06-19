import { FindManufacturerQuery } from "@facture/types";

import Badge from "../../Badge";

interface Props {
    types: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["type"];
}

export function Type({ types }: Props) {
    return <div className="flex justify-evenly flex-wrap">{types && types.map((type, index) => <Badge key={index}>{type.type}</Badge>)}</div>;
}

export default Type;
