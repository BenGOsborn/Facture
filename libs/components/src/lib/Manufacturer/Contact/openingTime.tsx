import { FindManufacturerQuery } from "@facture/graphql";

interface Props {
    openingTime: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["openingTime"];
}

export function OpeningTime({ openingTime }: Props) {
    // **** We need to do a bit of preprocessing first where we parse the elements to group multiple days into the same array seperated by a space
    // **** Also need some way of making the dates look nice

    return (
        <>
            {openingTime && (
                <div className="mb-3">
                    <h3 className="font-bold text-gray-700 text-lg">Opening Time</h3>
                    <ul>
                        {openingTime.map((openingTime, index) => {
                            return (
                                <li key={index} className="text-gray-900">
                                    <span className="font-medium">{openingTime.day}</span>: {openingTime.openTime} - {openingTime.closeTime}
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
