import { EmailDisplay } from "@facture/types";

import { Mail } from "tabler-icons-react";

interface Props {
    email: EmailDisplay[];
}

export function Email({ email }: Props) {
    if (email.length > 0)
        return (
            <div className="mb-3">
                <div className="flex space-x-2 items-center mb-3 text-gray-800">
                    <Mail />
                    <h3 className="font-bold text-lg ">Email</h3>
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
