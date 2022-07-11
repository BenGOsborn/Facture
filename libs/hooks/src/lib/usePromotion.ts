import { emitPromotionView, isSubscribedPromotionalEmail, PROMOTION_DELAY } from "@facture/helpers";
import { useEffect, useRef, useState } from "react";

export function usePromotion() {
    const timeout = useRef<NodeJS.Timeout | null>(null);
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        if (!isSubscribedPromotionalEmail())
            timeout.current = setTimeout(() => {
                emitPromotionView("mailing_list_popup");
                setVisible(true);
            }, PROMOTION_DELAY);

        return () => {
            if (timeout.current) clearTimeout(timeout.current);
        };
    }, []);

    return { visible, setVisible };
}

export default usePromotion;
