import { Mail } from "tabler-icons-react";

import { RainbowText } from "../RainbowText";
import { SubscribeFormPopup } from "./subscribeFormPopup";

export function SubscribeMail() {
    return (
        <div className="flex flex-col items-center space-y-3 text-center">
            <div className="text-gray-900">
                <Mail size={42} />
            </div>
            <p className="text-3xl font-bold text-gray-900">
                <RainbowText>Join</RainbowText> Our Newsletter
            </p>
            <p className="font-medium text-gray-700 text-md pb-7">
                Subscribe to our newsletter to stay up-to-date with the newest and most innovative manufacturing businesses near you!
            </p>
            <SubscribeFormPopup />
        </div>
    );
}

export default SubscribeMail;
