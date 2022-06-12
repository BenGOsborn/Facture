import { GetStaticProps } from "next";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

interface Props {
    launches: any[];
}

export function Index({ launches }: Props) {
    return (
        <>
            <h1>{process.env.NEXT_PUBLIC_API_ENDPOINT}</h1>
            {launches.map((launch, index) => (
                <div key={index}>{launch.mission_name}</div>
            ))}
        </>
    );
}

export default Index;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
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

    return { props: { launches: data.launchesPast } };
};
