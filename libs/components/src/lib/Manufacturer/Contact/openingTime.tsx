import { FindManufacturerQuery } from "@facture/types";
import { groupOpeningTime } from "@facture/helpers";
import { Clock } from "tabler-icons-react";

import OpeningTimeIndividual from "./openingTimeIndividual";

interface Props {
    openingTime: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["openingTime"];
}

export function OpeningTime({ openingTime }: Props) {
    if (openingTime)
        return (
            <div className="mb-3">
                <div className="flex space-x-2 items-center mb-3 text-gray-800">
                    <Clock />
                    <h3 className="font-bold text-lg">Opening Time</h3>
                </div>
                <ul className="space-y-1">
                    {Object.entries(groupOpeningTime(openingTime)).map((openingTime, index) => {
                        return (
                            <li key={index}>
                                <OpeningTimeIndividual openingTime={openingTime} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );

    return null;
}

export default OpeningTime;
