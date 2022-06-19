import { FindManufacturerQuery } from "@facture/types";

interface Props {
    display: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["display"]["data"][number];
}

export function DisplayCard({ display }: Props) {
    return <>{display.attributes.url}</>;
}

export default DisplayCard;
