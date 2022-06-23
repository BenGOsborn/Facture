import { ImageDisplay } from "@facture/types";

interface Props {
    display: ImageDisplay;
}

export function DisplayCard({ display }: Props) {
    const displayWidth = 1000;
    const displayHeight = 500;

    return <img className="rounded-md" src={`${display.url}?size=${displayWidth}x${displayHeight}`} width={displayWidth} height={displayHeight} />;
}

export default DisplayCard;
