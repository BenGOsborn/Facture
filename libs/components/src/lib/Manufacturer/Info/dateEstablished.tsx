import { getYearsFromDate } from "@facture/helpers";
import { FindManufacturerQuery } from "@facture/types";
import { Calendar } from "tabler-icons-react";

interface Props {
    dateEstablished: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["dateEstablished"];
}

export function DateEstablished({ dateEstablished }: Props) {
    if (DateEstablished)
        return (
            <div className="w-1/3 space-y-2">
                <p className="font-bold text-gray-900">Established</p>
                <div className="flex space-x-2 items-center">
                    <Calendar color="#374153" />
                    <p className="text-gray-700">{getYearsFromDate(new Date(dateEstablished))} years ago.</p>
                </div>
            </div>
        );

    return null;
}

export default DateEstablished;
