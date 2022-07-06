import type { ManufacturerFaxType } from "@facture/types";

import { Printer } from "tabler-icons-react";
import LabelledPair from "./labelledPair";

interface Props {
    fax: ManufacturerFaxType[];
}

export function Fax({ fax }: Props) {
    if (fax.length > 0)
        return (
            <div className="mb-3">
                <div className="flex space-x-2 items-center mb-3 text-gray-800">
                    <Printer />
                    <h3 className="font-bold text-lg ">Fax</h3>
                </div>
                <LabelledPair pair={fax.map((fax) => [fax.label, fax.fax])} />
            </div>
        );

    return null;
}

export default Fax;
