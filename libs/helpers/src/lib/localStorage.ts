export function subscribePromotionalEmail() {
    if (window && window.localStorage) window.localStorage.setItem("promotional_email", JSON.stringify(true));
}

export function isSubscribedPromotionalEmail() {
    if (window && window.localStorage) {
        const status = window.localStorage.getItem("promotional_email");
        if (!status) return false;

        return JSON.parse(status);
    }

    return false;
}
