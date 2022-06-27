import { SocialPlatformDisplay } from "@facture/types";

export function emitSocialEvent(social: SocialPlatformDisplay, link: string) {
    if (window !== undefined)
        // @ts-ignore
        window.gtag("event", "social_click", { social, link });
}

export function emitContactHover(period: number) {
    if (window !== undefined)
        // @ts-ignore
        window.gtag("event", "contact_us_hover", { period });
}
