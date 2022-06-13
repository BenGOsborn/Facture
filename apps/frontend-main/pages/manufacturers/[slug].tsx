import { GetStaticPaths, GetStaticProps } from "next";

import { ApolloClient, createHttpLink, gql, InMemoryCache, OperationVariables, QueryOptions } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export default function Index() {}

async function fetchData<T>(queryOptions: QueryOptions<OperationVariables, T>) {
    const httpLink = createHttpLink({
        uri: process.env.NEXT_PUBLIC_API_ENDPOINT,
    });

    const authLink = setContext((_, { headers }) => {
        const token = process.env.NEXT_PUBLIC_STRAPI_API_KEY;
        return { headers: { Authorization: "Bearer " + token, ...headers } };
    });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });

    const { data } = await client.query<T>(queryOptions);

    return data;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const {
        manufacturers: { data },
    } = await fetchData<{ manufacturers: { data: { id: string }[] } }>({
        query: gql`
            query {
                manufacturers {
                    data {
                        id
                    }
                }
            }
        `,
    });

    const paths = data.map((manufacturer) => {
        return {
            params: {
                slug: manufacturer.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    console.log(params.slug);

    return {
        props: {},
    };
};
