import { FindManufacturerCardQuery, SearchHit } from "@facture/types";

interface Props {
    data?: FindManufacturerCardQuery;
}

export function DefaultContent({ data }: Props) {
    if (data) {
        const x: SearchHit[] = data.manufacturers.data.map(({ attributes }) => ({
            descriptionShort: attributes.descriptionShort,
            logo: attributes.logo.data.attributes,
            manufacturer: attributes.manufacturer,
            name: attributes.name,
            slogan: attributes.slogan,
        }));

        return <div className="rounded-md shadow-md p-6 bg-white"></div>;
    }

    return null;
}

export default DefaultContent;
