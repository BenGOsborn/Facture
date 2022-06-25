import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { fetchData, findManufacturer, findManufacturers, parseFindManufacturerQuery, parseFindManufacturersQuery } from "@facture/graphql";
import { FindManufacturerQuery, FindManufacturerQueryVariables, FindManufacturersQuery, ManufacturerDisplay } from "@facture/types";
import { Manufacturer } from "@facture/components";

interface Props {
    manufacturer: ManufacturerDisplay;
}

export const ManufacturerPage: NextPage<Props> = ({ manufacturer }) => {
    return <Manufacturer manufacturer={manufacturer} />;
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    const uri = process.env["NEXT_PUBLIC_API_ENDPOINT"] as string;
    const authToken = process.env["NEXT_PUBLIC_STRAPI_API_KEY"] as string;

    const data = await fetchData<FindManufacturersQuery>(uri, authToken, { query: findManufacturers });
    const manufacturers = parseFindManufacturersQuery(data);

    if (!manufacturers) throw Error("Failed to find manufacturers");

    const paths = manufacturers.map((manufacturer) => {
        return {
            params: {
                slug: manufacturer.manufacturer,
            },
        };
    });

    return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const uri = process.env["NEXT_PUBLIC_API_ENDPOINT"] as string;
    const authToken = process.env["NEXT_PUBLIC_STRAPI_API_KEY"] as string;

    const data = await fetchData<FindManufacturerQuery, FindManufacturerQueryVariables>(uri, authToken, {
        query: findManufacturer,
        variables: { manufacturer: params?.slug as string },
    });
    const manufacturer = parseFindManufacturerQuery(data);

    if (!manufacturer) throw Error("Failed to find manufacturer");

    return { props: { manufacturer }, revalidate: 60 };
};

export default ManufacturerPage;
