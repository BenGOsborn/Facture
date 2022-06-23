import { PhoneNoDisplay } from "@facture/types";
import { PhoneCall } from "tabler-icons-react";
import LabelledPair from "./labelledPair";

interface Props {
    phone: PhoneNoDisplay[];
}

export function Phone({ phone }: Props) {
    if (phone.length > 0)
        return (
            <div className="mb-3">
                <div className="flex space-x-2 items-center mb-3 text-gray-800">
                    <PhoneCall />
                    <h3 className="font-bold text-lg">Phone</h3>
                </div>
                <LabelledPair pair={phone.map((phone) => [phone.label, phone.phoneNo])} />
            </div>
        );

    return null;
}

export default Phone;
