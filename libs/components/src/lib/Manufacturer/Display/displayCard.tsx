import type { ManufacturerImageType } from "@facture/types";
import Image from "next/image";

interface Props {
    display: ManufacturerImageType;
}

export function DisplayCard({ display }: Props) {
    const displayWidth = 1000;
    const displayHeight = 500;

    return <Image className="rounded-md" src={`${display.url}?size=${displayWidth}x${displayHeight}`} width={displayWidth} height={displayHeight} />;
}

export default DisplayCard;
