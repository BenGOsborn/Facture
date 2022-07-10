import type { CardType, ManufacturerSocialPlatformType } from "@facture/types";

export function emitSocialEvent(social: ManufacturerSocialPlatformType, link: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (window && window.gtag)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.gtag("event", "social_click", { social, link });
}

export function emitSectionHover(section: "contact" | "info" | "content" | "display" | "location", period: number) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (window && window.gtag)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.gtag("event", "section_hover", { section, period });
}

export function emitCardHover(card: CardType, period: number, cardOwnerId: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (window && window.gtag)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.gtag("event", "card_hover", { card, period, cardOwnerId });
}

export function emitCardSearchResults(card: CardType, cardOwnerId: string, query: string, ranking: number, totalResults: number) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (window && window.gtag)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.gtag("event", "card_search_results", { card, cardOwnerId, query, ranking, totalResults });
}

export function emitCardSearchHit(card: CardType, cardOwnerId: string, query: string, ranking: number, totalResults: number) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (window && window.gtag)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.gtag("event", "card_search_hit", { card, cardOwnerId, query, ranking, totalResults });
}

export function emitFormHit(section: "nav_notification" | "landing_main_hero" | "landing_main_cta" | "footer") {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (window && window.gtag)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.gtag("event", "form_hit", { section });
}
