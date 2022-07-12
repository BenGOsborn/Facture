import type { CardType, ManufacturerSocialPlatformType, PromotionType } from "@facture/types";

export function emitSocialClick(social: ManufacturerSocialPlatformType, link: string, ownerId: string) {
    if (window) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (window.gtag)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.gtag("event", "social_click", { social, link, ownerId });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (window.fbq)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.fbq("trackCustom", "social_click", { social, link, ownerId });
    }
}

export function emitSectionHover(section: "contact" | "info" | "content" | "display" | "location", period: number, ownerId: string) {
    if (window) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (window.gtag)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.gtag("event", "section_hover", { section, period, ownerId });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (window.fbq)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.fbq("trackCustom", "section_hover", { section, period, ownerId });
    }
}

export function emitCardHover(card: CardType, period: number, ownerId: string) {
    if (window) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (window.gtag)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.gtag("event", "card_hover", { card, period, ownerId });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (window.fbq)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.fbq("trackCustom", "card_hover", { card, period, ownerId });
    }
}

export function emitCardSearchResults(card: CardType, ownerId: string, query: string, ranking: number, totalResults: number) {
    if (window) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (window.gtag)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.gtag("event", "card_search_results", { card, ownerId, query, ranking, totalResults });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (window.fbq)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.fbq("trackCustom", "card_search_results", { card, ownerId, query, ranking, totalResults });
    }
}

export function emitCardSearchHit(card: CardType, ownerId: string, query: string, ranking: number, totalResults: number) {
    if (window) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (window.gtag)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.gtag("event", "card_search_hit", { card, ownerId, query, ranking, totalResults });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (window.fbq)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.fbq("trackCustom", "card_search_hit", { card, ownerId, query, ranking, totalResults });
    }
}

export function emitFormHit(section: "nav_notification" | "landing_main_hero" | "landing_main_cta" | "footer") {
    if (window) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (window.gtag)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.gtag("event", "form_hit", { section });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (window.fbq)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.fbq("trackCustom", "form_hit", { section });
    }
}

export function emitPromotionView(promotionType: PromotionType) {
    if (window) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (window.gtag)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.gtag("event", "promotion_view", { promotionType });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (window.fbq)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.fbq("trackCustom", "promotion_view", { promotionType });
    }
}

export function emitPromotionHit(promotionType: PromotionType) {
    if (window) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (window.gtag)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.gtag("event", "promotion_hit", { promotionType });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (window.fbq)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.fbq("trackCustom", "promotion_hit", { promotionType });
    }
}
