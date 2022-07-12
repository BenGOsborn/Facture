import { DESCRIPTION, NAME, SLOGAN, URL } from "@facture/helpers";
import Head from "next/head";
import Script from "next/script";

export function HeadGlobal() {
    const googleAnalyticsId = process.env["NEXT_PUBLIC_GOOGLE_ANALYTICS"] as string;
    const facebookPixelId = process.env["NEXT_PUBLIC_FACEBOOK_PIXEL"] as string;

    const title = `${NAME} - ${SLOGAN}`;

    const themeColor = "#daa041";

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="robots" content="index, follow" />

                <title key="title">{title}</title>
                <meta key="description" name="description" content={DESCRIPTION} />
                <meta key="color" name="theme-color" content={themeColor} />
                <link key="canonical" rel="canonical" href={URL} />

                <meta key="og:title" property="og:title" content={title} />
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
                <Script strategy="afterInteractive">
                    {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '${facebookPixelId}');
                    fbq('track', 'PageView');
                    `}
                </Script>
                <noscript>
                    <img height="1" width="1" className="hidden" src="https://www.facebook.com/tr?id=431834728841197&ev=PageView&noscript=1" />
                </noscript>
            </div>
        </>
    );
}

export default HeadGlobal;
