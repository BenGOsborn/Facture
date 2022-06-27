import { SocialDisplay } from "@facture/types";

export function emitSocialEvent(social: SocialDisplay, link: string) {
    if (window !== undefined)
        // @ts-ignore
        window.gtag("event", "social_click", { social, link });
}
