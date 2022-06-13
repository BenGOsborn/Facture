import { FindManufacturerQuery } from "@facture/graphql";

import Email from "./email";
import OpeningTime from "./openingTime";
import Phone from "./phone";

interface Props {
    email: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["email"];
    phone: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["phoneNo"];
    openingTime: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["openingTime"];
}

export function Contact({ email, phone, openingTime }: Props) {
    return (
        <div className="pb-6 mb-6 border-b border-gray-200">
            <h2 className="font-bold text-gray-900 text-xl mb-2">Contact</h2>
            <Email email={email} />
            <Phone phone={phone} />
            <OpeningTime openingTime={openingTime} />
        </div>
    );
}

export default Contact;
