import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { fetchData, findManufacturer, FindManufacturerQuery, findManufacturers, FindManufacturersQuery } from "@facture/graphql";
import { Contact, DescriptionLong, Details, Header } from "@facture/components";

interface Props {
    manufacturer: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"];
}

export const Manufacturer: NextPage<Props> = ({ manufacturer }) => {
    return (
        <>
            <Header
                name={manufacturer.name}
                slogan={manufacturer.slogan}
                dateEstablished={manufacturer.dateEstablished}
                logo={manufacturer.logo}
                description={manufacturer.descriptionShort}
                type={manufacturer.type}
                thumbnail={manufacturer.thumbnail}
            />
            <DescriptionLong description={manufacturer.descriptionLong} />
            <Details />
            <Contact email={manufacturer.email} phone={manufacturer.phoneNo} openingTime={manufacturer.openingTime} />
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
                slug: manufacturer.attributes.manufacturer,
            },
        };
    });

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const {
        manufacturers: {
            data: {
                0: { attributes },
            },
        },
    } = await fetchData<FindManufacturerQuery>(
        process.env.NEXT_PUBLIC_API_ENDPOINT,
        { query: findManufacturer, variables: { manufacturer: params.slug } },
        process.env.NEXT_PUBLIC_STRAPI_API_KEY
    );

    return { props: { manufacturer: attributes } };
};

export default Manufacturer;
