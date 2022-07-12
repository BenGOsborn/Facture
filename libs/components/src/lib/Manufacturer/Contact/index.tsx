import { ANALYTICS_HOVER_PERIOD, emitSectionHover } from "@facture/helpers";
import { useInterval } from "@facture/hooks";
import type { ManufacturerEmailType, ManufacturerFaxType, ManufacturerOpeningTimeType, ManufacturerPhoneNoType, ManufacturerSocialType } from "@facture/types";

import { Email } from "./email";
import { Fax } from "./fax";
import { OpeningTime } from "./openingTime";
import { Phone } from "./phone";
import { Social } from "./social";

interface Props {
    email: ManufacturerEmailType[];
    phone: ManufacturerPhoneNoType[];
    openingTime: ManufacturerOpeningTimeType[];
    social: ManufacturerSocialType[];
    fax: ManufacturerFaxType[];
    manufacturer: string;
}

export function Contact({ email, phone, openingTime, social, fax, manufacturer }: Props) {
    const { start, stop } = useInterval(ANALYTICS_HOVER_PERIOD, () => emitSectionHover("contact", ANALYTICS_HOVER_PERIOD, manufacturer));

    return (
        <div className="p-6 shadow-md rounded-md bg-white" onMouseEnter={start} onMouseLeave={stop}>
            <div className="space-y-6">
                <h2 className="font-bold text-gray-900 text-xl">Contact</h2>
                <Email email={email} />
                <Phone phone={phone} />
                <Fax fax={fax} />
                <OpeningTime openingTime={openingTime} />
            </div>

            <Social social={social} manufacturer={manufacturer} />
        </div>
    );
}

export default Contact;
