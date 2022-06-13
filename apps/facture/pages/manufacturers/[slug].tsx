import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { fetchData, findManufacturer, FindManufacturerQuery, findManufacturers, FindManufacturersQuery } from "@facture/graphql";
import { DescriptionLong, Header } from "@facture/components";

interface Props {
    manufacturer: FindManufacturerQuery["manufacturer"]["data"]["attributes"];
}

export const Manufacturer: NextPage<Props> = ({ manufacturer }) => {
    return (
        <>
            <Header
                name={manufacturer.name}
                logo={manufacturer.logo}
                description={manufacturer.descriptionShort}
                type={manufacturer.type}
                thumbnail={manufacturer.thumbnail}
            />
            <DescriptionLong description={manufacturer.descriptionLong} />
        </>
    );
};

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

export default Manufacturer;
