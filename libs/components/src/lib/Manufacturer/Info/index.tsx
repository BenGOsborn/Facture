import { FindManufacturerQuery } from "@facture/types";
import { getYearsFromDate } from "@facture/helpers";
import Image from "next/image";

import Type from "./type";

interface Props {
    name: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["name"];
    slogan: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["slogan"];
    dateEstablished: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["dateEstablished"];
    logo: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["logo"];
    description: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["descriptionShort"];
    type: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["type"];
}

export function Info({ name, slogan, dateEstablished, logo, description, type }: Props) {
    const logoWidth = 100;
    const logoHeight = 100;

    return (
        <header className="pb-6 mb-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-3">
                <Image src={`${logo.data.attributes.url}?size=${logoWidth}x${logoHeight}`} width={logoWidth} height={logoHeight} />
                <div className="text-right">
                    <h1 className="text-3xl font-bold">{name}</h1>
                    {slogan && <p className="text-xl font-bold text-gray-600">{slogan}</p>}
                </div>
            </div>
            <div className="mb-3 border-b-2 pb-3">
                <p className="text-gray-900 text-md">{description}</p>
            </div>
            <div className="flex items-start justify-between">
                {dateEstablished && (
                    <div>
                        <p className="font-bold">Established:</p>
                        <p>{getYearsFromDate(new Date(dateEstablished))} years ago.</p>
                    </div>
                )}
            </div>
            <div className="mb-6">
                <Type types={type} />
            </div>
        </header>
    );
}

export default Info;
