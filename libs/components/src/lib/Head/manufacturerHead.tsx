import Head from "next/head";
import Script from "next/script";

export function GlobalHead() {
    const title = "Facture - Connecting Manufacturers";
    const description = "Facture is an online platform dedicated to connecting manufacturers with individuals and businesses to drive local industry and innovation.";
    const url = "https://facture.com.au";
    const themeColor = "#daa041";

    const googleAnalyticsId = process.env["NEXT_PUBLIC_GOOGLE_ANALYTICS"] as string;

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="robots" content="index, follow" />

                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="theme-color" content={themeColor} />
                <link rel="canonical" href={url} />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={url} />
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
