import { AppShell, GlobalHead } from "@facture/components";
import { GraphQLProvider, LocationProvider } from "@facture/providers";

interface Props {
    children: any;
}

export default function Layout({ children }: Props) {
    return (
        <GraphQLProvider>
            <LocationProvider>
                <GlobalHead />
                <AppShell>{children}</AppShell>
            </LocationProvider>
        </GraphQLProvider>
    );
}
