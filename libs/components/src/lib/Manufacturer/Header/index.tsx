import { FindManufacturerQuery } from "@facture/graphql";
import Image from "next/image";

import Type from "./type";

interface Props {
    name: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["name"];
    slogan: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["slogan"];
    dateEstablished: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["dateEstablished"];
    logo: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["logo"];
    description: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["descriptionShort"];
    type: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["type"];
    thumbnail: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["thumbnail"];
}

export function Header({ name, slogan, dateEstablished, logo, description, type, thumbnail }: Props) {
    return (
        <header className="pb-6 mb-6 border-b border-gray-200">
            {thumbnail && (
                <div className="mb-6">
                    <Image className="rounded-sm" src={thumbnail.data.attributes.url} width={thumbnail.data.attributes.width} height={thumbnail.data.attributes.height} />
                </div>
            )}
            <div className="mb-6">
                <Image src={logo.data.attributes.url} width={logo.data.attributes.width} height={logo.data.attributes.height} />
            </div>
            <div className="flex flex-col mb-6">
                <h1 className="text-3xl font-bold text-indigo-600 mb-3">{name}</h1>
                {slogan && <p className="text-xl font-bold text-gray-600 mb-3">{slogan}</p>}
                <p className="text-gray-900 text-md w-3/5">{description}</p>
            </div>
            {dateEstablished && <div className="mb-6">Established {Math.floor((Date.now() - new Date(dateEstablished).getTime()) / 3.154e10)} years ago.</div>}
            <div className="mb-6">
                <Type types={type} />
            </div>
        </header>
    );
}

export default Header;
