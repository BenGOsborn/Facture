import { Nav } from "@facture/components";
import { GraphQLProvider } from "@facture/providers";

export default function Layout({ children }: { children: any }) {
    return (
        <GraphQLProvider>
            <Nav />
            <main className="w-5/6 mx-auto">{children}</main>
        </GraphQLProvider>
    );
}
