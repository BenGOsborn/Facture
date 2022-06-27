import { Location } from "@facture/types";
import { locationCtx } from "@facture/context";
import { useEffect, useState } from "react";

interface Props {
    children: any;
}

export function LocationProvider({ children }: Props) {
    const [location, setLocation] = useState<Location | undefined>(undefined);

    useEffect(() => {
        if (!navigator.geolocation) return;

        navigator.geolocation.getCurrentPosition((position) => setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude }));
    }, []);

    return <locationCtx.Provider value={location}>{children}</locationCtx.Provider>;
}

export default LocationProvider;
