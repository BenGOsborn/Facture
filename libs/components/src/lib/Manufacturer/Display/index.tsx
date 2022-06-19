import { FindManufacturerQuery } from "@facture/types";

import { Carousel } from "../../../";
import DisplayCard from "./displayCard";

interface Props {
    display: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["display"];
}

export function Display({ display }: Props) {
    if (display)
        return (
            <div className="shadow-md rounded-md p-6 bg-white">
                <Carousel
                    element={display.data.map((data) => (
                        <DisplayCard display={data} />
                    ))}
                />
            </div>
        );

    return null;
}

export default Display;
