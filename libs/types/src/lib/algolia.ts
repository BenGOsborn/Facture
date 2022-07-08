import { z } from "zod";

export const AlgoliaImageSchema = z.object({
    url: z.string(),
    width: z.number(),
    height: z.number(),
});

export type AlgoliaImageType = z.infer<typeof AlgoliaImageSchema>;

export const AlgoliaManufacturerSchema = z.object({
    descriptionLong: z.string(),
    descriptionShort: z.string(),
    manufacturer: z.string(),
    slogan: z.string().nullable(),
    location: z.array(z.object({ address: z.string(), label: z.string(), latitude: z.number(), longitude: z.number() })).nullable(),
    email: z.array(z.object({ email: z.string(), label: z.string() })).nullable(),
    phoneNo: z.array(z.object({ phoneNo: z.string(), label: z.string() })).nullable(),
    type: z.array(z.object({ type: z.string() })).nullable(),
    fax: z.array(z.object({ fax: z.string(), label: z.string() })).nullable(),
    name: z.string(),
    dateEstablished: z.string().nullable(),
    color: z.string(),
    priority: z.string(),
    thumbnail: AlgoliaImageSchema,
    display: z.array(AlgoliaImageSchema).nullable(),
    logo: AlgoliaImageSchema,
    openingTime: z.array(z.object({ day: z.number(), openTime: z.string(), closeTime: z.string() })).nullable(),
    social: z.array(z.object({ platform: z.string(), link: z.string() })).nullable(),
});

export type AlgoliaManufacturerType = z.infer<typeof AlgoliaManufacturerSchema>;
