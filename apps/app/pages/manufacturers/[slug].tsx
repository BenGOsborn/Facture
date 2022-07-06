import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { fetchData, findManufacturer, findManufacturers } from "@facture/graphql";
import { Manufacturer } from "@facture/components";
import type { FindManufacturerQueryType, FindManufacturerQueryVariablesType, FindManufacturersQueryType, ManufacturerType } from "@facture/types";
import { parseManufacturer, parseManufacturers } from "@facture/helpers";

interface Props {
    manufacturer: ManufacturerType;
}

export const ManufacturerPage: NextPage<Props> = ({ manufacturer }) => {
    return <Manufacturer manufacturer={manufacturer} />;
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    const uri = process.env["NEXT_PUBLIC_API_ENDPOINT"] as string;
    const authToken = process.env["NEXT_PUBLIC_STRAPI_API_KEY"] as string;

    const data = await fetchData<FindManufacturersQueryType>(uri, authToken, { query: findManufacturers });
    const manufacturers = parseManufacturers(data);

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

    const data = await fetchData<FindManufacturerQueryType, FindManufacturerQueryVariablesType>(uri, authToken, {
        query: findManufacturer,
        variables: { manufacturer: params?.slug as string },
    });
    const manufacturer = parseManufacturer(data);

    if (!manufacturer) throw Error("Failed to find manufacturer");

    return { props: { manufacturer }, revalidate: 60 };
};

export default ManufacturerPage;
