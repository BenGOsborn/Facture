import { FindManufacturerQuery } from "@facture/types";
import { Share } from "tabler-icons-react";

import SocialIcon from "./socialIcon";

interface Props {
    social: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["social"];
}

export function Social({ social }: Props) {
    if (social)
        return (
            <>
                <div className="flex space-x-2 items-center mb-3">
                    <Share color="#1f2937" />
                    <h3 className="font-bold text-lg text-gray-800">Social Links</h3>
                </div>
                <div className="flex items-center justify-start space-x-4">
                    {social.map((social, index) => (
                        <SocialIcon key={index} name={social.platform} link={social.link} />
                    ))}
                </div>
            </>
        );

    return null;
}

export default Social;
