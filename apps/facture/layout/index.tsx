import { Nav } from "@facture/components";
import { AlgoliaProvider, GraphQLProvider } from "@facture/providers";

export default function Layout({ children }: { children: any }) {
    return (
        <AlgoliaProvider
            appId={process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}
            algoliaApiKey={process.env.NEXT_PUBLIC_ALGOLIA_API_KEY}
            indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}
        >
            <GraphQLProvider uri={process.env.NEXT_PUBLIC_API_ENDPOINT}>
                <Nav />
                <main className="w-5/6 mx-auto">{children}</main>
            </GraphQLProvider>
        </AlgoliaProvider>
    );
}
