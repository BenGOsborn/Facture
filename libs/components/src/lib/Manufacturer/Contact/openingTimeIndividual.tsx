import { formatTime, mappingToDay } from "@facture/helpers";

interface Props {
    openingTime: [
        string,
        {
            openTime: any;
            closeTime: any;
        }[]
    ];
}

export function OpeningTimeIndividual({ openingTime }: Props) {
    return (
        <>
            <span className="font-medium text-gray-800">{mappingToDay(parseInt(openingTime[0]))}</span>:{" "}
            <span className="text-gray-700">
                {openingTime[1].map((openingTime) => `${formatTime(openingTime.openTime)} - ${formatTime(openingTime.closeTime)}`).join(", ")}
            </span>
        </>
    );
}

export default OpeningTimeIndividual;
