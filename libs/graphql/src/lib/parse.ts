// @ts-nocheck

import { FindManufacturerCardQuery, FindManufacturerQuery, FindManufacturersQuery, ManufacturerDisplay, SearchHit } from "@facture/types";

export function parseFindManufacturerCardQuery(data: FindManufacturerCardQuery) {
    try {
        const out: SearchHit[] = data.manufacturers.data.map(({ attributes }) => ({
            descriptionShort: attributes.descriptionShort,
            logo: attributes.logo.data.attributes,
            manufacturer: attributes.manufacturer,
            name: attributes.name,
            slogan: attributes.slogan,
            type: attributes.type.map((type) => type.type),
            color: attributes.color,
            thumbnail: attributes.thumbnail.data.attributes,
        }));

        return out;
    } catch {
        return null;
    }
}

export function parseFindManufacturersQuery(data: FindManufacturersQuery) {
    try {
        const out = data.manufacturers.data.map((data) => ({
            manufacturer: data.attributes.manufacturer,
        }));

        return out;
    } catch {
        return null;
    }
}

export function parseFindManufacturerQuery(data: FindManufacturerQuery) {
    try {
        const attributes = data.manufacturers.data[0].attributes;

        return {
            name: attributes.name,
            slogan: attributes.slogan,
            dateEstablished: attributes.dateEstablished,
            logo: attributes.logo.data.attributes,
            color: attributes.color,
            descriptionLong: attributes.descriptionLong,
            descriptionShort: attributes.descriptionShort,
            thumbnail: attributes.thumbnail.data.attributes,
            display: attributes.display.data.map((display) => display.attributes),
            email: attributes.email,
            location: attributes.location,
            openingTime: attributes.openingTime,
            phoneNo: attributes.phoneNo,
            social: attributes.social,
            type: attributes.type.map((type) => type.type),
        } as ManufacturerDisplay;
    } catch (e: any) {
        return null;
    }
}
