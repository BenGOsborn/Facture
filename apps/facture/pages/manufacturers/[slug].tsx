import { GetStaticPaths, GetStaticProps } from "next";

import ReactMarkdown from "react-markdown";

import { fetchData, findManufacturer, FindManufacturerQuery, findManufacturers, FindManufacturersQuery } from "@facture/graphql";
import { Components } from "@facture/components";

interface Props {
    manufacturer: FindManufacturerQuery["manufacturer"]["data"]["attributes"];
}

export default function Index({ manufacturer }: Props) {
    return (
        <>
            <Components />
            <ReactMarkdown className="prose">{manufacturer.descriptionLong}</ReactMarkdown>
        </>
    );
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    const {
        manufacturers: { data },
    } = await fetchData<FindManufacturersQuery>(process.env.NEXT_PUBLIC_API_ENDPOINT, { query: findManufacturers }, process.env.NEXT_PUBLIC_STRAPI_API_KEY);

    const paths = data.map((manufacturer) => {
        return {
            params: {
                slug: manufacturer.id,
            },
        };
    });

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const {
        manufacturer: {
            data: { attributes },
        },
    } = await fetchData<FindManufacturerQuery>(
        process.env.NEXT_PUBLIC_API_ENDPOINT,
        { query: findManufacturer, variables: { id: params.slug } },
        process.env.NEXT_PUBLIC_STRAPI_API_KEY
    );

    return { props: { manufacturer: attributes } };
};
