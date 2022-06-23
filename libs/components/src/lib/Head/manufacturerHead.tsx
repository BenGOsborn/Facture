import { ColorDisplay } from "@facture/types";
import Head from "next/head";

interface Props {
    manufacturer: string;
    name: string;
    description: string;
    color: ColorDisplay;
}

export function ManufacturerHead({ manufacturer, name, description, color }: Props) {
    const title = `${name} - Facture`;
    const url = `https://facture.com.au/manufacturers/${manufacturer}`;

    const colorMapping = {};

    const themeColor = "#daa041"; // **** It would be really cool to map the colours...

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="theme-color" content={themeColor} />
            <link rel="canonical" href={url} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
        </Head>
    );
}

export default ManufacturerHead;
