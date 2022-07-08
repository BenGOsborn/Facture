import { NAME, URL } from "@facture/helpers";
import Head from "next/head";

export function HeadSearch() {
    const title = `Search - ${NAME}`;
    const url = `${URL}/search`;

    return (
        <>
            <Head>
                <title key="title">{title}</title>
                <link key="canonical" rel="canonical" href={url} />

                <meta key="og:title" property="og:title" content={title} />
                <meta key="og:url" property="og:url" content={url} />
            </Head>
        </>
    );
}

export default HeadSearch;
