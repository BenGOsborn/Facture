import { FindManufacturerQuery } from "@facture/types";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

interface Props {
    location: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["location"][number];
    googleApiKey: string;
}

export function LocationCard({ location, googleApiKey }: Props) {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: googleApiKey });

    if (isLoaded) return <>{location.address}</>;

    return null;
}

export default LocationCard;
