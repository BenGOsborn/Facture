import { FindManufacturerQuery } from "@facture/types";
import { getYearsFromDate } from "@facture/helpers";

import { Calendar } from "tabler-icons-react";
import Image from "next/image";

import Type from "./type";

interface Props {
    name: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["name"];
    slogan: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["slogan"];
    dateEstablished: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["dateEstablished"];
    logo: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["logo"];
    description: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["descriptionShort"];
    type: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["type"];
    color: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["color"];
}

export function Info({ name, slogan, dateEstablished, logo, description, type, color }: Props) {
    const logoWidth = 75;
    const logoHeight = 75;

    return (
        <header className="p-6 shadow-md rounded-md">
            <div className="flex items-center justify-between mb-3">
                <Image src={`${logo.data.attributes.url}?size=${logoWidth}x${logoHeight}`} width={logoWidth} height={logoHeight} />
                <div className="text-right">
                    <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
                    {slogan && <p className="text-xl font-bold text-gray-800">{slogan}</p>}
                </div>
            </div>
            <div className="mb-3 border-b-2 pb-3">
                <p className="text-gray-700 text-md">{description}</p>
            </div>
            <div className="flex items-start justify-between space-x-10">
                {dateEstablished && (
                    <div className="w-1/3 space-y-2">
                        <p className="font-bold text-gray-900">Established:</p>
                        <div className="flex space-x-2 items-center">
                            <Calendar color="#374153" />
                            <p className="text-gray-700">{getYearsFromDate(new Date(dateEstablished))} years ago.</p>
                        </div>
                    </div>
                )}
                {type && (
                    <div className="w-2/3 space-y-2">
                        <p className="font-bold text-gray-900">Tags:</p>
                        <Type color={color} types={type.slice(0, 4)} />
                    </div>
                )}
            </div>
        </header>
    );
}

export default Info;
