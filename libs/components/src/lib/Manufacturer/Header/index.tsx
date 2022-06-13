import { FindManufacturerQuery } from "@facture/graphql";
import Image from "next/image";

import Type from "./type";

interface Props {
    name: FindManufacturerQuery["manufacturer"]["data"]["attributes"]["name"];
    logo: FindManufacturerQuery["manufacturer"]["data"]["attributes"]["logo"];
    description: FindManufacturerQuery["manufacturer"]["data"]["attributes"]["descriptionShort"];
    type: FindManufacturerQuery["manufacturer"]["data"]["attributes"]["type"];
    thumbnail: FindManufacturerQuery["manufacturer"]["data"]["attributes"]["thumbnail"];
}

export function Header({ name, logo, description, type, thumbnail }: Props) {
    return (
        <header className="pb-6 mb-6 border-b border-gray-200">
            <div className="flex justify-between mb-6">
                <div className="w-2/3">
                    <Image src={logo.data.attributes.url} width={logo.data.attributes.width} height={logo.data.attributes.height} />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-indigo-600 mb-3 ml-auto">{name}</h1>
                    <p className="text-gray-900 text-md w-3/5 text-right ml-auto">{description}</p>
                </div>
            </div>
            <div className="mb-6">
                <Type types={type} />
            </div>
            <div className="flex justify-center">
                <Image
                    className="rounded-md"
                    src={thumbnail?.data?.attributes?.url}
                    width={thumbnail?.data?.attributes?.width}
                    height={thumbnail?.data?.attributes?.height}
                />
            </div>
        </header>
    );
}

export default Header;
