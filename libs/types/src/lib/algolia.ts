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
    location: z.array(z.object({ address: z.string(), label: z.string(), latitude: z.number(), longitude: z.number() })),
    email: z.array(z.object({ email: z.string(), label: z.string() })),
    phoneNo: z.array(z.object({ phoneNo: z.string(), label: z.string() })),
    type: z.array(z.object({ type: z.string() })),
    fax: z.array(z.object({ fax: z.string(), label: z.string() })),
    name: z.string(),
    dateEstablished: z.string().nullable(),
    color: z.string(),
    priority: z.string(),
    thumbnail: AlgoliaImageSchema,
    display: z.array(AlgoliaImageSchema),
    logo: AlgoliaImageSchema,
    openingTime: z.array(z.object({ day: z.number(), openTime: z.string(), closeTime: z.string() })),
    social: z.array(z.object({ platform: z.string(), link: z.string() })),
});

export type AlgoliaManufacturerType = z.infer<typeof AlgoliaManufacturerSchema>;
