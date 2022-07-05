import { z } from "zod";

export const LocationSchema = z.object({
    latitude: z.number(),
    longitude: z.number(),
});

export type LocationType = z.infer<typeof LocationSchema>;
