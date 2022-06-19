import { FindManufacturerQuery } from "@facture/types";

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
        <div className="p-6 shadow-md rounded-md">
            <h2 className="font-bold text-gray-900 text-xl mb-2">Contact</h2>
            <Email email={email} />
            <Phone phone={phone} />
            <OpeningTime openingTime={openingTime} />

            {/* **** I need a social media section in here now (maybe add some icons too ?) */}
        </div>
    );
}

export default Contact;
