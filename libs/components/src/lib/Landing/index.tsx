import { useQuery } from "@apollo/client";
import { findManufacturerCard } from "@facture/graphql";
import { FindManufacturerCardQuery } from "@facture/types";

import { DefaultContent } from "./Content";
import { Hero } from "./Hero";

export function Landing() {
    const { data } = useQuery<FindManufacturerCardQuery>(findManufacturerCard);

    return (
        <div className="space-y-14">
            <Hero />
            <DefaultContent data={data} />
        </div>
    );
}

export default Landing;
