import { AppShell, HeadGlobal } from "@facture/components";
import { LocationProvider } from "@facture/providers";
import { AppProps } from "next/app";

import "tailwindcss/tailwind.css";
import "../styles/global.css";

export function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <LocationProvider>
                <HeadGlobal />
                <AppShell>
                    <Component {...pageProps} />
                </AppShell>
            </LocationProvider>
        </>
    );
}

export default CustomApp;
