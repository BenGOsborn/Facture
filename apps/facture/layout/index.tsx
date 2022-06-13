import { GraphQLProvider } from "../provider";

export default function Layout({ children }: { children: any }) {
    return (
        <GraphQLProvider>
            <main>{children}</main>
        </GraphQLProvider>
    );
}
