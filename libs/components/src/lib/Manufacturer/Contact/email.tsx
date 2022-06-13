import { FindManufacturerQuery } from "@facture/graphql";

interface Props {
    email: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["email"];
}

export function Email({ email }: Props) {
    return (
        <>
            {email && (
                <div className="mb-3">
                    <h3 className="font-bold text-gray-700 text-lg">Email</h3>
                    <ul>
                        {email.map((email, index) => {
                            return (
                                <li key={index} className="text-gray-900">
                                    <span className="font-medium">{email.label}</span>: {email.email}
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
