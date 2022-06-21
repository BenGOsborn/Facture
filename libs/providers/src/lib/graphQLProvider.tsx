import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

interface Props {
    children: any;
}

export function GraphQLProvider({ children }: Props) {
    const uri = process.env["NEXT_PUBLIC_API_ENDPOINT"];
    const authToken = process.env["NEXT_PUBLIC_STRAPI_API_KEY"];

    const httpLink = createHttpLink({ uri });

    const authLink = setContext((_, { headers }) => {
        return { headers: { Authorization: `Bearer ${authToken ? authToken : ""}`, ...headers } };
    });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default GraphQLProvider;
