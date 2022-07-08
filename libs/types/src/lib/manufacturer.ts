import { z } from "zod";

export const ManufacturerImageSchema = z.object({
    url: z.string(),
});

export type ManufacturerImageType = z.infer<typeof ManufacturerImageSchema>;

export const ManufacturerEmailSchema = z.object({
    email: z.string(),
    label: z.string(),
});

export type ManufacturerEmailType = z.infer<typeof ManufacturerEmailSchema>;

export const ManufacturerOpeningTimeSchema = z.object({
    day: z.number(),
    openTime: z.string(),
    closeTime: z.string(),
});

export type ManufacturerOpeningTimeType = z.infer<typeof ManufacturerOpeningTimeSchema>;

export const ManufacturerPhoneNoSchema = z.object({
    phoneNo: z.string(),
    label: z.string(),
});

export type ManufacturerPhoneNoType = z.infer<typeof ManufacturerPhoneNoSchema>;

export const ManufacturerFaxSchema = z.object({
    fax: z.string(),
    label: z.string(),
});

export type ManufacturerFaxType = z.infer<typeof ManufacturerFaxSchema>;

export const ManufacturerSocialPlatformSchema = z.union([
    z.literal("website"),
    z.literal("facebook"),
    z.literal("twitter"),
    z.literal("linkedin"),
    z.literal("instagram"),
    z.literal("youtube"),
]);

export type ManufacturerSocialPlatformType = z.infer<typeof ManufacturerSocialPlatformSchema>;

export const ManufacturerSocialSchema = z.object({
    platform: ManufacturerSocialPlatformSchema,
    link: z.string(),
});

export type ManufacturerSocialType = z.infer<typeof ManufacturerSocialSchema>;

export const ManufacturerLocationSchema = z.object({
    latitude: z.number(),
    longitude: z.number(),
    address: z.string(),
    label: z.string(),
});

export type ManufacturerLocationType = z.infer<typeof ManufacturerLocationSchema>;

export const ManufacturerColorSchema = z.union([
    z.literal("slate"),
    z.literal("gray"),
    z.literal("zinc"),
    z.literal("neutral"),
    z.literal("stone"),
    z.literal("red"),
    z.literal("orange"),
    z.literal("amber"),
    z.literal("yellow"),
    z.literal("lime"),
    z.literal("green"),
    z.literal("emerald"),
    z.literal("teal"),
    z.literal("cyan"),
    z.literal("sky"),
    z.literal("blue"),
    z.literal("indigo"),
    z.literal("violet"),
    z.literal("purple"),
    z.literal("fuchsia"),
    z.literal("pink"),
    z.literal("rose"),
]);

export type ManufacturerColorType = z.infer<typeof ManufacturerColorSchema>;

export const ManufacturerSchema = z.object({
    name: z.string(),
    slogan: z.string().nullable(),
    dateEstablished: z.string().nullable(),
    logo: ManufacturerImageSchema,
    descriptionShort: z.string(),
    type: z.array(z.string()).nullable(),
    color: ManufacturerColorSchema,
    email: z.array(ManufacturerEmailSchema).nullable(),
    phoneNo: z.array(ManufacturerPhoneNoSchema).nullable(),
    openingTime: z.array(ManufacturerOpeningTimeSchema).nullable(),
    social: z.array(ManufacturerSocialSchema).nullable(),
    location: z.array(ManufacturerLocationSchema).nullable(),
    descriptionLong: z.string(),
    thumbnail: ManufacturerImageSchema,
    display: z.array(ManufacturerImageSchema).nullable(),
    manufacturer: z.string(),
    fax: z.array(ManufacturerFaxSchema).nullable(),
});

export type ManufacturerType = z.infer<typeof ManufacturerSchema>;
