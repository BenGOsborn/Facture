import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { fetchData, findManufacturer, findManufacturers } from "@facture/graphql";
import { FindManufacturerQuery, FindManufacturersQuery } from "@facture/types";
import { ManufacturerDisplay } from "@facture/components";

interface Props {
    manufacturer: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"];
}

export const Manufacturer: NextPage<Props> = ({ manufacturer }) => {
    return <ManufacturerDisplay manufacturer={manufacturer} />;
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    const uri = process.env["NEXT_PUBLIC_API_ENDPOINT"];
    const authToken = process.env["NEXT_PUBLIC_STRAPI_API_KEY"];

    const {
        manufacturers: { data },
    } = await fetchData<FindManufacturersQuery>(uri, authToken, { query: findManufacturers });

    const paths = data.map((manufacturer) => {
        return {
            params: {
                slug: manufacturer.attributes.manufacturer,
            },
        };
    });

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const uri = process.env["NEXT_PUBLIC_API_ENDPOINT"];
    const authToken = process.env["NEXT_PUBLIC_STRAPI_API_KEY"];

    const {
        manufacturers: {
            data: {
                0: { attributes },
            },
        },
    } = await fetchData<FindManufacturerQuery>(uri, authToken, { query: findManufacturer, variables: { manufacturer: params.slug } });

    return { props: { manufacturer: attributes } };
};

export default Manufacturer;
