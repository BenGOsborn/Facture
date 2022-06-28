import { SocialPlatformDisplay } from "@facture/types";

export function emitSocialEvent(social: SocialPlatformDisplay, link: string) {
    if (window !== undefined)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.gtag("event", "social_click", { social, link });
}

export function emitSectionHover(section: "contact" | "info" | "content" | "display" | "location", period: number) {
    if (window !== undefined)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.gtag("event", "section_hover", { section, period });
}

export function emitCardHover(card: "nav_search" | "landing_search", period: number) {
    if (window !== undefined)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.gtag("event", "card_hover", { card, period });
}
