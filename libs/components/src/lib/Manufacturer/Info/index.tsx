import { ImageDisplay } from "@facture/types";

import Image from "next/image";

import { Type } from "./type";
import { DateEstablished } from "./dateEstablished";

interface Props {
    name: string;
    slogan?: string;
    dateEstablished?: any;
    logo: ImageDisplay;
    description: string;
    type?: string[];
    color: string;
}

export function Info({ name, slogan, dateEstablished, logo, description, type, color }: Props) {
    const logoWidth = 75;
    const logoHeight = 75;

    return (
        <header className="p-6 shadow-md rounded-md bg-white">
            <div className="flex flex-col items-start mb-3 space-y-2">
                <Image className="rounded-md" src={`${logo.url}?size=${logoWidth}x${logoHeight}`} width={logoWidth} height={logoHeight} />
                <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
                {slogan && <p className="text-xl font-bold text-gray-700">{slogan}</p>}
            </div>
            <div className="mb-3 border-b-2 pb-3">
                <p className="text-gray-700 text-md">{description}</p>
            </div>
            <div className="flex items-start justify-between space-x-10">
                <DateEstablished dateEstablished={dateEstablished} />
                <Type color={color} type={type} />
            </div>
        </header>
    );
}

export default Info;
