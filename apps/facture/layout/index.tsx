import { Nav } from "@facture/components";
import { GraphQLProvider } from "@facture/providers";

export default function Layout({ children }: { children: any }) {
    return (
        <GraphQLProvider uri={process.env.NEXT_PUBLIC_API_ENDPOINT}>
            <div className="w-3/4 mx-auto">
                <Nav />
                <main>{children}</main>
            </div>
        </GraphQLProvider>
    );
}
