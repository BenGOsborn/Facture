import { HeadSearch, LandingSearch } from "@facture/components";
import { GraphQLProvider } from "@facture/providers";
import { NextPage } from "next";

export const SearchPage: NextPage = () => {
    return (
        <GraphQLProvider>
            <HeadSearch />
            <LandingSearch />;
        </GraphQLProvider>
    );
};

export default SearchPage;
