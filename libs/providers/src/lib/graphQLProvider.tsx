import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface Props {
    uri: string;
    children: any;
}

export function GraphQLProvider({ uri, children }: Props) {
    return <ApolloProvider client={new ApolloClient({ uri, cache: new InMemoryCache() })}>{children}</ApolloProvider>;
}

export default GraphQLProvider;
