import { emitSectionHover } from "@facture/helpers";
import { useInterval } from "@facture/hooks";
import { LocationDisplay } from "@facture/types";
import { useLoadScript } from "@react-google-maps/api";
import { MapPin } from "tabler-icons-react";

import { Carousel } from "../../../";
import { LocationCard } from "./locationCard";

interface Props {
    location: LocationDisplay[];
}

export function Location({ location }: Props) {
    const googleApiKey = process.env["NEXT_PUBLIC_GOOGLE_API_KEY"] as string;

    const { isLoaded } = useLoadScript({ googleMapsApiKey: googleApiKey });

    const period = 1000;
    const { start, stop } = useInterval(period, () => emitSectionHover("location", period));

    if (location.length > 0)
        return (
            <div className="p-6 shadow-md rounded-md bg-white" onMouseEnter={start} onMouseLeave={stop}>
                <div className="flex space-x-2 items-center mb-6 text-gray-800">
                    <MapPin />
                    <h3 className="font-bold text-lg">Location</h3>
                </div>
                <Carousel
                    element={location.map((data) => (
                        <LocationCard location={data} mapScriptLoaded={isLoaded} />
                    ))}
                    shiftSize={1000}
                />
            </div>
        );

    return null;
}

export default Location;
