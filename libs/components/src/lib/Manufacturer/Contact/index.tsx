import { FindManufacturerQuery } from "@facture/types";

import Email from "./email";
import OpeningTime from "./openingTime";
import Phone from "./phone";
import Social from "./social";

interface Props {
    email: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["email"];
    phone: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["phoneNo"];
    openingTime: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["openingTime"];
    social: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["social"];
}

export function Contact({ email, phone, openingTime, social }: Props) {
    return (
        <div className="p-6 shadow-md rounded-md bg-white">
            <div className="space-y-6">
                <h2 className="font-bold text-gray-900 text-xl">Contact</h2>
                <Email email={email} />
                <Phone phone={phone} />
                <OpeningTime openingTime={openingTime} />
            </div>

            <Social social={social} />
        </div>
    );
}

export default Contact;
