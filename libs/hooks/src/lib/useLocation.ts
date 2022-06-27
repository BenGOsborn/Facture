import { locationCtx } from "@facture/providers";
import { useContext } from "react";

export function useLocation() {
    return useContext(locationCtx);
}

export default useLocation;
