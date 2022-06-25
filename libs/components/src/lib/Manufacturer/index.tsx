import { ManufacturerDisplay } from "@facture/types";
import { ManufacturerHead } from "../Head";

import { Contact } from "./Contact";
import { Content } from "./Content";
import { Display } from "./Display";
import { Info } from "./Info";
import { Location } from "./Location";

interface Props {
    manufacturer: ManufacturerDisplay;
}

export function Manufacturer({ manufacturer }: Props) {
    return (
        <>
            <ManufacturerHead name={manufacturer.name} manufacturer={manufacturer.manufacturer} description={manufacturer.descriptionShort} color={manufacturer.color} />
            <div className="flex flex-col lg:flex-row lg:space-x-14 space-y-7 lg:space-y-0 items-start">
                <div className="space-y-7 lg:w-4/5">
                    <Info
                        name={manufacturer.name}
                        slogan={manufacturer.slogan}
                        dateEstablished={manufacturer.dateEstablished}
                        logo={manufacturer.logo}
                        description={manufacturer.descriptionShort}
                        type={manufacturer.type}
                        color={manufacturer.color}
                    />
                    <Contact
                        email={manufacturer.email}
                        phone={manufacturer.phoneNo}
                        openingTime={manufacturer.openingTime}
                        social={manufacturer.social}
                        fax={manufacturer.fax}
                    />
                    <Location location={manufacturer.location} />
                </div>
                <div className="space-y-7">
                    <Content description={manufacturer.descriptionLong} thumbnail={manufacturer.thumbnail} />
                    <Display display={manufacturer.display} />
                </div>
            </div>
        </>
    );
}

export default Manufacturer;
