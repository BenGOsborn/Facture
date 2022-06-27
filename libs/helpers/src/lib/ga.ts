import { SocialPlatformDisplay } from "@facture/types";

export function emitSocialEvent(social: SocialPlatformDisplay, link: string) {
    if (window !== undefined)
        // @ts-ignore
        window.gtag("event", "social_click", { social, link });
}

export function emitSectionHover(section: "contact" | "info" | "content" | "display" | "location", period: number) {
    if (window !== undefined)
        // @ts-ignore
        window.gtag("event", "section_hover", { section, period });
}
