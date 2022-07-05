import { DESCRIPTION, TITLE, URL } from "@facture/helpers";
import Head from "next/head";
import Script from "next/script";

export function GlobalHead() {
    const googleAnalyticsId = process.env["NEXT_PUBLIC_GOOGLE_ANALYTICS"] as string;

    const themeColor = "#daa041";

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="robots" content="index, follow" />

                <title key="title">{TITLE}</title>
                <meta key="description" name="description" content={DESCRIPTION} />
                <meta key="color" name="theme-color" content={themeColor} />
                <link key="canonical" rel="canonical" href={URL} />

                <meta key="og:title" property="og:title" content={TITLE} />
                <meta key="og:description" property="og:description" content={DESCRIPTION} />
                <meta key="og:url" property="og:url" content={URL} />
            </Head>
            <div>
                <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${googleAnalyticsId}');
                `}
                </Script>
            </div>
        </>
    );
}

export default GlobalHead;
