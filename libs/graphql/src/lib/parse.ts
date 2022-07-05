import {
    FindManufacturerCardQuerySchema,
    FindManufacturerCardQueryType,
    FindManufacturerQuerySchema,
    FindManufacturerQueryType,
    FindManufacturersQuerySchema,
    FindManufacturersQueryType,
    ManufacturerSchema,
    ManufacturerType,
    SearchHitSchema,
    SearchHitType,
} from "@facture/types";
import { z } from "zod";

export function parseFindManufacturerCardQuery(data: FindManufacturerCardQueryType) {
    if (!FindManufacturerCardQuerySchema.safeParse(data).success) throw Error("Invalid 'FindManufacturerCardQuery'");

    const out = data.manufacturers.data.map(({ attributes }) => ({
        descriptionShort: attributes.descriptionShort,
        logo: attributes.logo.data.attributes,
        manufacturer: attributes.manufacturer,
        name: attributes.name,
        slogan: attributes.slogan,
        type: attributes.type?.map((type) => type.type) || [],
        color: attributes.color,
        thumbnail: attributes.thumbnail.data.attributes,
    }));

    if (!z.array(SearchHitSchema).safeParse(out)) throw Error("Invalid 'FindManufacturerCardQuery'");

    return out as SearchHitType[];
}

export function parseFindManufacturersQuery(data: FindManufacturersQueryType) {
    if (!FindManufacturersQuerySchema.safeParse(data).success) throw Error("Invalid 'FindManufacturersQuery'");

    const out = data.manufacturers.data.map((data) => ({
        manufacturer: data.attributes.manufacturer,
    }));

    return out;
}

export function parseFindManufacturerQuery(data: FindManufacturerQueryType) {
    if (!FindManufacturerQuerySchema.safeParse(data).success) throw Error("Invalid 'FindManufacturerQuery'");

    const attributes = data.manufacturers.data[0].attributes;
    const out = {
        name: attributes.name,
        slogan: attributes.slogan,
        dateEstablished: attributes.dateEstablished,
        logo: attributes.logo.data.attributes,
        color: attributes.color,
        descriptionLong: attributes.descriptionLong,
        descriptionShort: attributes.descriptionShort,
        thumbnail: attributes.thumbnail.data.attributes,
        display: attributes.display?.data.map((display) => display.attributes) || [],
        email: attributes.email,
        location: attributes.location,
        openingTime: attributes.openingTime,
        phoneNo: attributes.phoneNo,
        fax: attributes.fax,
        social: attributes.social,
        type: attributes.type?.map((type) => type.type) || [],
        manufacturer: attributes.manufacturer,
    };

    if (!ManufacturerSchema.safeParse(out).success) throw Error("Invalid 'FindManufacturerQuery'");

    return out as ManufacturerType;
}

export function parseAlgoliaSearchHits(data: any) {
    const out: SearchHit[] = data.map(
        (hit) =>
            ({
                color: hit.color,
                descriptionShort: hit.descriptionShort,
                logo: hit.logo,
                manufacturer: hit.manufacturer,
                name: hit.name,
                thumbnail: hit.thumbnail,
                type: hit.type.map((type) => type.type),
                slogan: hit.slogan,
            } as SearchHit)
    );

    return out;
}
