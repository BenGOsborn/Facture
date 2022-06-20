import { FindManufacturerQuery } from "@facture/types";

interface Props {
    location: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["location"][number];
    googleApiKey: string;
}

export function LocationCard({ location, googleApiKey }: Props) {
    return <>{location.address}</>;
}

export default LocationCard;
