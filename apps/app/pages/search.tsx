import { LandingSearch } from "@facture/components";
import { GraphQLProvider } from "@facture/providers";
import { NextPage } from "next";

export const SearchPage: NextPage = () => {
    return (
        <GraphQLProvider>
            <LandingSearch />;
        </GraphQLProvider>
    );
};

export default SearchPage;
