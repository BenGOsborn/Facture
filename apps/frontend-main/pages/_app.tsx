import { AppProps } from "next/app";
import Head from "next/head";

import "tailwindcss/tailwind.css";

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Facture</title>
            </Head>
            <main>
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default CustomApp;
