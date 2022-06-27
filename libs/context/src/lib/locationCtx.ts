import { Location } from "@facture/types";
import { createContext } from "react";

export const locationCtx = createContext<Location | undefined>(undefined as any);
