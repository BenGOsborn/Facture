import { AppShell, HeadGlobal } from "@facture/components";
import { LocationProvider, PromotionalProvider } from "@facture/providers";
import { AppProps } from "next/app";

import "tailwindcss/tailwind.css";
import "../styles/global.css";

export function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <LocationProvider>
                <PromotionalProvider>
                    <HeadGlobal />
                    <AppShell>
                        <Component {...pageProps} />
                    </AppShell>
                </PromotionalProvider>
            </LocationProvider>
        </>
    );
}

export default CustomApp;
