import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export function GraphQLProvider({ uri, children }: { uri: string; children: any }) {
    return <ApolloProvider client={new ApolloClient({ uri, cache: new InMemoryCache() })}>{children}</ApolloProvider>;
}

export default GraphQLProvider;
