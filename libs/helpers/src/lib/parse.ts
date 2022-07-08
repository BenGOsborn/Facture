import type {
    AlgoliaManufacturerType,
    FindManufacturerCardQueryType,
    FindManufacturerQueryType,
    FindManufacturersQueryType,
    ManufacturerType,
    SearchHitType,
} from "@facture/types";
import {
    AlgoliaManufacturerSchema,
    FindManufacturerCardQuerySchema,
    FindManufacturerQuerySchema,
    FindManufacturersQuerySchema,
    ManufacturerSchema,
    SearchHitSchema,
} from "@facture/types";
import { z } from "zod";

export function parseManufacturerCardData(data: FindManufacturerCardQueryType) {
    FindManufacturerCardQuerySchema.parse(data);

    const out = data.manufacturers.data.map(({ attributes }) => ({
        descriptionShort: attributes.descriptionShort,
        logo: attributes.logo.data.attributes,
        manufacturer: attributes.manufacturer,
        name: attributes.name,
        slogan: attributes.slogan,
        type: attributes.type ? attributes.type.map((type) => type.type) : [],
        color: attributes.color,
        thumbnail: attributes.thumbnail.data.attributes,
    }));

    z.array(SearchHitSchema).parse(out);

    return out as SearchHitType[];
}

export function parseManufacturerCardMeta(data: FindManufacturerCardQueryType) {
    FindManufacturerCardQuerySchema.parse(data);

    return data.manufacturers.meta;
}

export function parseManufacturers(data: FindManufacturersQueryType) {
    FindManufacturersQuerySchema.parse(data);

    const out = data.manufacturers.data.map((data) => ({
        manufacturer: data.attributes.manufacturer,
    }));

    return out;
}

export function parseManufacturer(data: FindManufacturerQueryType) {
    FindManufacturerQuerySchema.parse(data);

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
        display: attributes.display ? attributes.display.data.map((display) => display.attributes) : [],
        email: attributes.email || [],
        location: attributes.location || [],
        openingTime: attributes.openingTime || [],
        phoneNo: attributes.phoneNo || [],
        fax: attributes.fax || [],
        social: attributes.social || [],
        type: attributes.type ? attributes.type.map((type) => type.type) : [],
        manufacturer: attributes.manufacturer || [],
    };

    ManufacturerSchema.parse(out);

    return out as ManufacturerType;
}

export function parseAlgoliaSearchHits(data: AlgoliaManufacturerType[]) {
    z.array(AlgoliaManufacturerSchema).parse(data);

    const out = data.map((hit) => ({
        color: hit.color,
        descriptionShort: hit.descriptionShort,
        logo: hit.logo,
        manufacturer: hit.manufacturer,
        name: hit.name,
        thumbnail: hit.thumbnail,
        type: hit.type ? hit.type.map((type) => type.type) : [],
        slogan: hit.slogan,
    }));

    z.array(SearchHitSchema).parse(out);

    return out as SearchHitType[];
}
