import { FindManufacturerQuery } from "@facture/types";

interface Props {
    phone: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["phoneNo"];
}

export function Phone({ phone }: Props) {
    return (
        <>
            {phone && (
                <div className="mb-3">
                    <h3 className="font-bold text-gray-700 text-lg">Phone</h3>
                    <ul>
                        {phone.map((phone, index) => {
                            return (
                                <li key={index} className="text-gray-900">
                                    <span className="font-medium">{phone.label}</span>: {phone.phoneNo}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Phone;
