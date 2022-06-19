import { FindManufacturerQuery } from "@facture/types";
import { formatTime, groupOpeningTime, mappingToDay } from "@facture/helpers";

interface Props {
    openingTime: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["openingTime"];
}

export function OpeningTime({ openingTime }: Props) {
    return (
        <>
            {openingTime && (
                <div className="mb-3">
                    <h3 className="font-bold text-gray-700 text-lg">Opening Time</h3>
                    <ul>
                        {Object.entries(groupOpeningTime(openingTime)).map((openingTime, index) => {
                            return (
                                <li key={index} className="text-gray-900">
                                    <span className="font-medium">{mappingToDay(parseInt(openingTime[0]))}</span>:{" "}
                                    {openingTime[1].map((openingTime, index) => `${formatTime(openingTime.openTime)} - ${formatTime(openingTime.closeTime)}`).join(", ")}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
    );
}

export default OpeningTime;
