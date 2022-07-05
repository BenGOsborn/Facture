import { z } from "zod";

import { ManufacturerColorSchema, ManufacturerImageSchema } from "./manufacturer";

export const SearchHitSchema = z.object({
    name: z.string(),
    color: ManufacturerColorSchema,
    logo: ManufacturerImageSchema,
    descriptionShort: z.string(),
    manufacturer: z.string(),
    slogan: z.string().nullable(),
    type: z.array(z.string()),
    thumbnail: ManufacturerImageSchema,
});

export type SearchHitType = z.infer<typeof SearchHitSchema>;
