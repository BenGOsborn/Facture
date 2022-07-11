import { z } from "zod";

export const CardSchema = z.union([z.literal("landing_search"), z.literal("nav_search")]);

export type CardType = z.infer<typeof CardSchema>;

export const PromotionSchema = z.literal("mailing_list");

export type PromotionType = z.infer<typeof PromotionSchema>;
