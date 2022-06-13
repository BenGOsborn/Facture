import { GraphQLProvider } from "@facture/providers";

export default function Layout({ children }: { children: any }) {
    return (
        <GraphQLProvider uri={process.env.NEXT_PUBLIC_API_ENDPOINT}>
            <main>{children}</main>
        </GraphQLProvider>
    );
}
