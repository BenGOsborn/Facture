import { FindManufacturerQuery } from "@facture/types";
import { Photo } from "tabler-icons-react";

import { Carousel } from "../../../";
import DisplayCard from "./displayCard";

interface Props {
    display: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["display"];
}

export function Display({ display }: Props) {
    if (display)
        return (
            <div className="shadow-md rounded-md p-6 bg-white">
                <div className="flex space-x-2 items-center mb-6">
                    <Photo color="#1f2937" />
                    <h3 className="font-bold text-lg text-gray-800">Gallery</h3>
                </div>
                <Carousel
                    element={display.data.map((data) => (
                        <DisplayCard display={data} />
                    ))}
                    shiftSize={1000}
                />
            </div>
        );

    return null;
}

export default Display;
