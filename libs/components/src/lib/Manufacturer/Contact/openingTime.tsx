import { ManufacturerOpeningTimeType } from "@facture/types";
import { formatTime, groupOpeningTime, mappingToDay } from "@facture/helpers";
import { Clock } from "tabler-icons-react";

import LabelledPair from "./labelledPair";

interface Props {
    openingTime: ManufacturerOpeningTimeType[];
}

export function OpeningTime({ openingTime }: Props) {
    if (openingTime.length > 0)
        return (
            <div className="mb-3">
                <div className="flex space-x-2 items-center mb-3 text-gray-800">
                    <Clock />
                    <h3 className="font-bold text-lg">Opening Time</h3>
                </div>
                <LabelledPair
                    pair={Object.entries(groupOpeningTime(openingTime)).map((openingTime) => [
                        mappingToDay(parseInt(openingTime[0])),
                        openingTime[1].map((openingTime) => `${formatTime(openingTime.openTime)} - ${formatTime(openingTime.closeTime)}`).join(", "),
                    ])}
                />
            </div>
        );

    return null;
}

export default OpeningTime;
