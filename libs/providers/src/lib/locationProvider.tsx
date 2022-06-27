import { Location } from "@facture/types";
import { createContext, useEffect, useState } from "react";

export const locationCtx = createContext<Location | undefined>(undefined as any);

export function LocationProvider({ children }: { children: any }) {
    const [location, setLocation] = useState<Location | undefined>(undefined);

    useEffect(() => {
        if (!navigator.geolocation) return;

        navigator.geolocation.getCurrentPosition((position) => setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude }));
    }, []);

    return <locationCtx.Provider value={location}>{children}</locationCtx.Provider>;
}
