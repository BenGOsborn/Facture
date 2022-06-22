import { EmailDisplay, PhoneNoDisplay, OpeningTimeDisplay, SocialDisplay } from "@facture/types";

import { Email } from "./email";
import { OpeningTime } from "./openingTime";
import { Phone } from "./phone";
import { Social } from "./social";

interface Props {
    email?: EmailDisplay[];
    phone?: PhoneNoDisplay[];
    openingTime?: OpeningTimeDisplay[];
    social?: SocialDisplay[];
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
