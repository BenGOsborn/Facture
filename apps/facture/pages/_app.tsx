import { AppProps } from "next/app";

import Layout from "../layout";

import "tailwindcss/tailwind.css";
import "../styles/global.css";

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default CustomApp;
