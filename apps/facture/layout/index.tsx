import { Footer, GlobalHead, Nav } from "@facture/components";
import { GraphQLProvider, LocationProvider } from "@facture/providers";

interface Props {
    children: any;
}

export default function Layout({ children }: Props) {
    return (
        <GraphQLProvider>
            <LocationProvider>
                <GlobalHead />
                <Nav />
                <main className="w-5/6 mx-auto">{children}</main>
                <Footer />
            </LocationProvider>
        </GraphQLProvider>
    );
}
