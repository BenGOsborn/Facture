import { FindManufacturerQuery } from "@facture/types";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

interface Props {
    location: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["location"][number];
    googleApiKey: string;
}

export function LocationCard({ location, googleApiKey }: Props) {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: googleApiKey });

    if (isLoaded)
        return (
            <>
                <GoogleMap zoom={12} center={{ lat: location.latitude, lng: location.longitude }} mapContainerClassName="w-full h-72 rounded-md mb-3">
                    <Marker position={{ lat: location.latitude, lng: location.longitude }} />
                </GoogleMap>
                <div className="space-y-3 text-md">
                    <p className="font-bold text-gray-800">{location.label}</p>
                    <p className="text-gray-700">{location.address}</p>
                </div>
            </>
        );

    return null;
}

export default LocationCard;
