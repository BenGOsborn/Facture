import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface Props {
    children: any;
}

export function GraphQLProvider({ children }: Props) {
    return <ApolloProvider client={new ApolloClient({ uri: process.env["NEXT_PUBLIC_API_ENDPOINT"], cache: new InMemoryCache() })}>{children}</ApolloProvider>;
}

export default GraphQLProvider;
