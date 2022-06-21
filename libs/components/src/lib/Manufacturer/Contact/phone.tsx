import { FindManufacturerQuery, PhoneNo } from "@facture/types";

import { PhoneCall } from "tabler-icons-react";

interface Props {
    phone?: PhoneNo[];
}

export function Phone({ phone }: Props) {
    if (phone)
        return (
            <div className="mb-3">
                <div className="flex space-x-2 items-center mb-3">
                    <PhoneCall color="#1f2937" />
                    <h3 className="font-bold text-lg text-gray-800">Phone</h3>
                </div>
                <ul>
                    {phone.map((phone, index) => {
                        return (
                            <li key={index}>
                                <span className="font-medium text-gray-800">{phone.label}</span>: <span className="text-gray-700">{phone.phoneNo}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );

    return null;
}

export default Phone;
