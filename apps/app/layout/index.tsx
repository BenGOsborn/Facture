import { AppShell, GlobalHead } from "@facture/components";
import { GraphQLProvider, LocationProvider } from "@facture/providers";

interface Props {
    children: any;
}

export function Layout({ children }: Props) {
    return (
        <GraphQLProvider>
            <LocationProvider>
                <GlobalHead />
                <AppShell>{children}</AppShell>
            </LocationProvider>
        </GraphQLProvider>
    );
}

export default Layout;
