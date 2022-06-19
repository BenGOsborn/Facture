import { FindManufacturerQuery } from "@facture/types";
import Image from "next/image";

interface Props {
    display: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["display"]["data"][number];
}

export function DisplayCard({ display }: Props) {
    const displayWidth = 1000;
    const displayHeight = 500;

    return <Image className="rounded-md" src={`${display.attributes.url}?size=${displayWidth}x${displayHeight}`} width={displayWidth} height={displayHeight} />;
}

export default DisplayCard;
