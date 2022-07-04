import { ColorDisplay, ImageDisplay } from "@facture/types";
import Image from "next/image";
import { useInterval } from "@facture/hooks";
import { ANALYTICS_HOVER_PERIOD, emitSectionHover } from "@facture/helpers";

import { Type } from "./type";
import { DateEstablished } from "./dateEstablished";

interface Props {
    name: string;
    slogan?: string;
    dateEstablished?: any;
    logo: ImageDisplay;
    description: string;
    type: string[];
    color: ColorDisplay;
}

export function Info({ name, slogan, dateEstablished, logo, description, type, color }: Props) {
    const { start, stop } = useInterval(ANALYTICS_HOVER_PERIOD, () => emitSectionHover("info", ANALYTICS_HOVER_PERIOD));

    const logoWidth = 75;
    const logoHeight = 75;

    return (
        <div className="p-6 shadow-md rounded-md bg-white" onMouseEnter={start} onMouseLeave={stop}>
            <div className="flex flex-col items-start mb-3 space-y-2">
                <Image
                    role="info-logo"
                    className="rounded-md"
                    src={`${logo.url}?size=${logoWidth}x${logoHeight}`}
                    width={logoWidth}
                    height={logoHeight}
                    priority={true}
                />
                <h1 role="info-name" className="text-3xl font-bold text-gray-900">
                    {name}
                </h1>
                {slogan && (
                    <p role="info-slogan" className="text-xl font-bold text-gray-700">
                        {slogan}
                    </p>
                )}
            </div>
            <div className="mb-3 border-b-2 pb-3">
                <p role="info-description" className="text-gray-700 text-md">
                    {description}
                </p>
            </div>
            <div className="flex items-start justify-between space-x-10">
                <DateEstablished dateEstablished={dateEstablished} />
                <Type color={color} type={type} />
            </div>
        </div>
    );
}

export default Info;
