import { LocationDisplay } from "@facture/types";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

interface Props {
    location: LocationDisplay;
    mapScriptLoaded: boolean;
}

export function LocationCard({ location, mapScriptLoaded }: Props) {
    const center = useMemo(() => ({ lat: location.latitude, lng: location.longitude }), []);

    const mapOptions: google.maps.MapOptions = { disableDefaultUI: true };

    if (mapScriptLoaded)
        return (
            <div className="space-y-3">
                <GoogleMap zoom={12} center={center} mapContainerClassName="w-full h-96 rounded-md" options={mapOptions}>
                    <Marker position={center} />
                </GoogleMap>
                <div className="text-md">
                    <p role="location-card-label" className="font-bold text-gray-800">
                        {location.label}
                    </p>
                    <p role="location-card-address" className="text-gray-700">
                        {location.address}
                    </p>
                </div>
            </div>
        );

    return null;
}

export default LocationCard;
