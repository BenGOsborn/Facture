import { Footer, Nav } from "@facture/components";
import { GraphQLProvider } from "@facture/providers";

interface Props {
    children: any;
}

export default function Layout({ children }: Props) {
    return (
        <GraphQLProvider>
            <Nav />
            <main className="w-5/6 mx-auto">{children}</main>
            <Footer />
        </GraphQLProvider>
    );
}
