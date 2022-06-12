import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { GetStaticPaths, GetStaticProps } from "next";

interface Props {}

export default function Index({}: Props) {}

export const getStaticPaths: GetStaticPaths = async () => {
    const client = new ApolloClient({
        uri: process.env.NEXT_PUBLIC_API_ENDPOINT,
        cache: new InMemoryCache(),
    });

    const { data } = await client.query({
        query: gql`
            query GetLaunches {
                launchesPast(limit: 10) {
                    id
                    mission_name
                }
            }
        `,
    });

    return {
        paths: [],
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    return {
        props: {},
    };
};
