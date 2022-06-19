import { FindManufacturerQuery } from "@facture/types";

import { Mail } from "tabler-icons-react";

interface Props {
    email: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["email"];
}

export function Email({ email }: Props) {
    if (email)
        return (
            <div className="mb-3">
                <div className="flex space-x-2 items-center mb-3">
                    <Mail color="#1f2937" />
                    <h3 className="font-bold text-lg text-gray-800">Email</h3>
                </div>
                <ul>
                    {email.map((email, index) => {
                        return (
                            <li key={index}>
                                <span className="font-medium text-gray-800">{email.label}</span>: <span className="text-gray-700">{email.email}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );

    return null;
}

export default Email;
