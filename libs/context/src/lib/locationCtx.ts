import type { LocationType } from "@facture/types";
import { createContext } from "react";

export const locationCtx = createContext<LocationType | undefined>(undefined as any);

export default locationCtx;
