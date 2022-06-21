import { FindManufacturerQuery, Image } from "@facture/types";

import Contact from "./Contact";
import Content from "./Content";
import Display from "./Display";
import Info from "./Info";
import Location from "./Location";

interface Props {
    manufacturer: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"];
}

export function ManufacturerDisplay({ manufacturer }: Props) {
    const name = manufacturer.name;
    const slogan = manufacturer.slogan;
    const dateEstablished = manufacturer.dateEstablished;
    const logo = manufacturer.logo.data.attributes.url as any;
    const description = manufacturer.descriptionShort;
    const type = manufacturer.type.map((type) => type.type);
    const color = manufacturer.color;
    const email = manufacturer.email;
    const location = manufacturer.location;

    return (
        <div className="flex flex-col lg:flex-row lg:space-x-14 space-y-7 lg:space-y-0 items-start">
            <div className="space-y-7 lg:w-4/5">
                <Info name={name} slogan={slogan} dateEstablished={dateEstablished} logo={logo} description={description} type={type} color={color} />
                <Contact email={manufacturer.email} phone={manufacturer.phoneNo} openingTime={manufacturer.openingTime} social={manufacturer.social} />
                <Location location={manufacturer.location} />
            </div>
            <div className="space-y-7">
                <Content description={manufacturer.descriptionLong} thumbnail={manufacturer.thumbnail} />
                <Display display={manufacturer.display} />
            </div>
        </div>
    );
}

export default ManufacturerDisplay;
