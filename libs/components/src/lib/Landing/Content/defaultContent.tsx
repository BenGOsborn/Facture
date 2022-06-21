import { FindManufacturerCardQuery, SearchHit } from "@facture/types";

import { Card } from "./card";

interface Props {
    data?: FindManufacturerCardQuery;
}

export function DefaultContent({ data }: Props) {
    if (data) {
        const results: SearchHit[] = data.manufacturers.data.map(({ attributes }) => ({
            descriptionShort: attributes.descriptionShort,
            logo: attributes.logo.data.attributes,
            manufacturer: attributes.manufacturer,
            name: attributes.name,
            slogan: attributes.slogan,
            type: attributes.type.map((type) => type.type),
            color: attributes.color,
            thumbnail: attributes.thumbnail.data.attributes,
        }));

        return (
            <div className="rounded-md shadow-md py-7 px-14 bg-white space-y-7">
                <h2 className="text-xl text-gray-900 font-bold">Explore</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    {results.map((result, index) => (
                        <Card key={index} hit={result} />
                    ))}
                </div>
            </div>
        );
    }

    return null;
}

export default DefaultContent;
