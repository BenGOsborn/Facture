import { ManufacturerSocialPlatformType } from "@facture/types";

export function emitSocialEvent(social: ManufacturerSocialPlatformType, link: string) {
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

export function emitCardHover(card: "nav_search" | "landing_search", period: number, cardOwnerId: string) {
    if (window !== undefined)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.gtag("event", "card_hover", { card, period, cardOwnerId });
}

export function emitCardSearchResults(card: "nav_search" | "landing_search", cardOwnerId: string, query: string, ranking: number, totalResults: number) {
    if (window !== undefined)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.gtag("event", "card_search_results", { card, cardOwnerId, query, ranking, totalResults });
}

export function emitCardSearchHit(card: "nav_search" | "landing_search", cardOwnerId: string, query: string, ranking: number, totalResults: number) {
    if (window !== undefined)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.gtag("event", "card_search_hit", { card, cardOwnerId, query, ranking, totalResults });
}
