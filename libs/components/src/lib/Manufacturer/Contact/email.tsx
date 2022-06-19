import { FindManufacturerQuery } from "@facture/types";

interface Props {
    email: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["email"];
}

export function Email({ email }: Props) {
    return (
        <>
            {email && (
                <div className="mb-3">
                    <h3 className="font-bold text-lg text-gray-800">Email</h3>
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
            )}
        </>
    );
}

export default Email;
