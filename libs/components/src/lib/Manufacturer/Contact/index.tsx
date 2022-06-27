import { EmailDisplay, PhoneNoDisplay, OpeningTimeDisplay, SocialDisplay, FaxDisplay } from "@facture/types";

import { Email } from "./email";
import { Fax } from "./fax";
import { OpeningTime } from "./openingTime";
import { Phone } from "./phone";
import { Social } from "./social";

interface Props {
    email: EmailDisplay[];
    phone: PhoneNoDisplay[];
    openingTime: OpeningTimeDisplay[];
    social: SocialDisplay[];
    fax: FaxDisplay[];
}

export function Contact({ email, phone, openingTime, social, fax }: Props) {
    // **** We need some sort of use timeout that is going to help us to be able to track the analytics here - I can easily make this into a hook
    let timer: NodeJS.Timer;
    const period = 1;

    return (
        <div
            className="p-6 shadow-md rounded-md bg-white"
            onMouseEnter={() => (timer = setInterval(() => console.log("Timed"), period * 1000))}
            onMouseLeave={() => clearInterval(timer)}
        >
            <div className="space-y-6">
                <h2 className="font-bold text-gray-900 text-xl">Contact</h2>
                <Email email={email} />
                <Phone phone={phone} />
                <Fax fax={fax} />
                <OpeningTime openingTime={openingTime} />
            </div>

            <Social social={social} />
        </div>
    );
}

export default Contact;
