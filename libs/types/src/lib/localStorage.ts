import { z } from "zod";

export const PromotionalEmailSchema = z.literal("promotional_email");

export type PromotionalEmailType = z.infer<typeof PromotionalEmailSchema>;
