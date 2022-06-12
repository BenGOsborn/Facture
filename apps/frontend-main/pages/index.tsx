import { GetStaticProps } from "next";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

interface Props {
    launches: any[];
}

export function Index({ launches }: Props) {
    return (
        <h1>
            {launches.map((launch, index) => (
                <div key={index}>{launch.id}</div>
            ))}
        </h1>
    );
}

export default Index;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const client = new ApolloClient({
        uri: "https://api.spacex.land/graphql/",
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
