import { locationCtx } from "@facture/context";
import { useLocationProvider } from "@facture/hooks";

interface Props {
    children: any;
}

export function LocationProvider({ children }: Props) {
    const location = useLocationProvider();

    return <locationCtx.Provider value={location}>{children}</locationCtx.Provider>;
}

export default LocationProvider;
