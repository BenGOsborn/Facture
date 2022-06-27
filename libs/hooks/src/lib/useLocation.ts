import { locationCtx } from "@facture/context";
import { useContext } from "react";

export function useLocation() {
    return useContext(locationCtx);
}

export default useLocation;
