import { FindManufacturerQuery } from "@facture/types";

interface Props {
    display: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["display"];
}

export function Display({ display }: Props) {
    if (display) return <></>;

    return null;
}

export default Display;
