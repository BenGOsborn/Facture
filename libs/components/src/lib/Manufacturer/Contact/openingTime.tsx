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
                    <h3 className="font-bold text-lg text-gray-800">Opening Time</h3>
                    <ul>
                        {Object.entries(groupOpeningTime(openingTime)).map((openingTime, index) => {
                            return (
                                <li key={index}>
                                    <span className="font-medium text-gray-800">{mappingToDay(parseInt(openingTime[0]))}</span>:{" "}
                                    <span className="text-gray-700">
                                        {openingTime[1]
                                            .map((openingTime, index) => `${formatTime(openingTime.openTime)} - ${formatTime(openingTime.closeTime)}`)
                                            .join(", ")}
                                    </span>
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
