import type { ManufacturerSocialType } from "@facture/types";
import { Share } from "tabler-icons-react";

import { SocialIcon } from "./socialIcon";

interface Props {
    social: ManufacturerSocialType[];
    manufacturer: string;
}

export function Social({ social, manufacturer }: Props) {
    if (social.length > 0)
        return (
            <div className="border-t-2 pt-3 mt-3">
                <div className="flex space-x-2 items-center mb-3 text-gray-800">
                    <Share />
                    <h3 className="font-bold text-lg">Social Links</h3>
                </div>
                <div className="flex items-center justify-start space-x-4 text-gray-700">
                    {social.map((social, index) => (
                        <SocialIcon key={index} name={social.platform} link={social.link} manufacturer={manufacturer} />
                    ))}
                </div>
            </div>
        );

    return null;
}

export default Social;
