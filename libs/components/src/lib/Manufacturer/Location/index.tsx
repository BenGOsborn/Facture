import { FindManufacturerQuery } from "@facture/types";
import { MapPin } from "tabler-icons-react";

import { Carousel } from "../../../";
import LocationCard from "./locationCard";

interface Props {
    location: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["location"];
    googleApiKey: string;
}

export function Location({ location, googleApiKey }: Props) {
    if (location)
        return (
            <div className="p-6 shadow-md rounded-md bg-white">
                <div className="flex space-x-2 items-center mb-6">
                    <MapPin color="#1f2937" />
                    <h3 className="font-bold text-lg text-gray-800">Location</h3>
                </div>
                <Carousel
                    element={location.map((data) => (
                        <LocationCard location={data} googleApiKey={googleApiKey} />
                    ))}
                />
            </div>
        );

    return null;
}

export default Location;
