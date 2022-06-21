import { FindManufacturerQuery } from "@facture/types";

import { Contact } from "./Contact";
import { Content } from "./Content";
import { Display } from "./Display";
import { Info } from "./Info";
import { Location } from "./Location";

interface Props {
    manufacturer: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"];
}

export function ManufacturerDisplay({ manufacturer }: Props) {
    const name = manufacturer.name;
    const slogan = manufacturer.slogan;
    const dateEstablished = manufacturer.dateEstablished;
    const logo = manufacturer.logo.data.attributes;
    const descriptionShort = manufacturer.descriptionShort;
    const type = manufacturer.type.map((type) => type.type);
    const color = manufacturer.color;
    const email = manufacturer.email;
    const phoneNo = manufacturer.phoneNo;
    const openingTime = manufacturer.openingTime;
    const social = manufacturer.social;
    const location = manufacturer.location;
    const descriptionLong = manufacturer.descriptionLong;
    const thumbnail = manufacturer.thumbnail;
    const display = manufacturer.display;

    return (
        <div className="flex flex-col lg:flex-row lg:space-x-14 space-y-7 lg:space-y-0 items-start">
            <div className="space-y-7 lg:w-4/5">
                <Info name={name} slogan={slogan} dateEstablished={dateEstablished} logo={logo} description={descriptionShort} type={type} color={color} />
                <Contact email={email} phone={phoneNo} openingTime={openingTime} social={social} />
                <Location location={location} />
            </div>
            <div className="space-y-7">
                <Content description={descriptionLong} thumbnail={thumbnail} />
                <Display display={display} />
            </div>
        </div>
    );
}

export default ManufacturerDisplay;
