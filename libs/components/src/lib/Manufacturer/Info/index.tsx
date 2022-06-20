import { FindManufacturerQuery } from "@facture/types";

import Image from "next/image";

import Type from "./type";
import DateEstablished from "./dateEstablished";

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
        <header className="p-6 shadow-md rounded-md bg-white">
            <div className="flex items-center justify-between mb-3">
                <Image className="rounded-md" src={`${logo.data.attributes.url}?size=${logoWidth}x${logoHeight}`} width={logoWidth} height={logoHeight} />
                <div className="text-right">
                    <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
                    {slogan && <p className="text-xl font-bold text-gray-700">{slogan}</p>}
                </div>
            </div>
            <div className="mb-3 border-b-2 pb-3">
                <p className="text-gray-700 text-md">{description}</p>
            </div>
            <div className="flex items-start justify-between space-x-10">
                <DateEstablished dateEstablished={dateEstablished} />
                <Type color={color} type={type.slice(0, 4)} />
            </div>
        </header>
    );
}

export default Info;
