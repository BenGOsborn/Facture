import { GetStaticPaths, GetStaticProps } from "next";

import { ApolloClient, createHttpLink, gql, InMemoryCache, OperationVariables, QueryOptions } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { findManufacturer, FindManufacturerQuery, findManufacturers, FindManufacturersQuery, Manufacturer } from "libs/graphql";

interface Props {
    manufacturer: Manufacturer;
}

export default function Index({ manufacturer }: Props) {
    return <div>{JSON.stringify(manufacturer)}</div>;
}

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

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    const {
        manufacturers: { data },
    } = await fetchData<FindManufacturersQuery>({ query: findManufacturers });

    const paths = data.map((manufacturer) => {
        return {
            params: {
                slug: manufacturer.id,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const {
        manufacturer: {
            data: { attributes },
        },
    } = await fetchData<FindManufacturerQuery>({ query: findManufacturer, variables: { id: params.slug } });

    return {
        props: { manufacturer: attributes as Manufacturer },
    };
};
