import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function GraphQLProvider({ children }: { children: any }) {
    return <ApolloProvider client={new ApolloClient({ uri: process.env.NEXT_PUBLIC_API_ENDPOINT, cache: new InMemoryCache() })}>{children}</ApolloProvider>;
}
