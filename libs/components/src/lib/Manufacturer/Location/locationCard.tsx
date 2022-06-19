import { FindManufacturerQuery } from "@facture/types";
import Image from "next/image";

interface Props {
    location: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["location"][number];
}

export function LocationCard({ location }: Props) {
    const displayWidth = 1000;
    const displayHeight = 500;

    return <>{location.address}</>;
}

export default LocationCard;
