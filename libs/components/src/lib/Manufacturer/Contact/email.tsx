import type { ManufacturerEmailType } from "@facture/types";

import { Mail } from "tabler-icons-react";
import { LabelledPair } from "./labelledPair";

interface Props {
    email: ManufacturerEmailType[];
}

export function Email({ email }: Props) {
    if (email.length > 0)
        return (
            <div className="mb-3">
                <div className="flex space-x-2 items-center mb-3 text-gray-800">
                    <Mail />
                    <h3 className="font-bold text-lg ">Email</h3>
                </div>
                <LabelledPair pair={email.map((email) => [email.label, email.email])} />
            </div>
        );

    return null;
}

export default Email;
