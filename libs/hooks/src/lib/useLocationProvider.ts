import type { LocationType } from "@facture/types";
import { useEffect, useState } from "react";

export function useLocationProvider() {
    const [location, setLocation] = useState<LocationType | undefined>(undefined);

    useEffect(() => {
        if (!navigator.geolocation) return;

        navigator.geolocation.getCurrentPosition((position) => setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude }));
    }, []);

    return location;
}

export default useLocationProvider;
