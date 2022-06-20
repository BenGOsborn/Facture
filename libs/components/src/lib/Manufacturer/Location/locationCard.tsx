import { FindManufacturerQuery } from "@facture/types";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

interface Props {
    location: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["location"][number];
}

export function LocationCard({ location }: Props) {
    const googleApiKey = process.env["NEXT_PUBLIC_GOOGLE_API_KEY"];

    const { isLoaded } = useLoadScript({ googleMapsApiKey: googleApiKey });
    const center = useMemo(() => ({ lat: location.latitude, lng: location.longitude }), []);

    const mapOptions: google.maps.MapOptions = { disableDefaultUI: true };

    if (isLoaded)
        return (
            <div className="space-y-3">
                <GoogleMap zoom={12} center={center} mapContainerClassName="w-full h-96 rounded-md" options={mapOptions}>
                    <Marker position={center} />
                </GoogleMap>
                <div className="text-md">
                    <p className="font-bold text-gray-800">{location.label}</p>
                    <p className="text-gray-700">{location.address}</p>
                </div>
            </div>
        );

    return null;
}

export default LocationCard;
