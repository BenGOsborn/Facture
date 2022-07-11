import { z } from "zod";

export const CardSchema = z.union([z.literal("landing_search"), z.literal("nav_search")]);

export type CardType = z.infer<typeof CardSchema>;

export const PromotionSchema = z.union([z.literal("mailing_list_footer"), z.literal("mailing_list_popup")]);

export type PromotionType = z.infer<typeof PromotionSchema>;
