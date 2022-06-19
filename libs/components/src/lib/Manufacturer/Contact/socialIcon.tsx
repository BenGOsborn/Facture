import Link from "next/link";

import { BrandChrome, BrandFacebook, BrandInstagram, BrandLinkedin, BrandTwitter, BrandYoutube } from "tabler-icons-react";

interface Props {
    name: string;
    link: string;
}

export function SocialIcon({ name, link }: Props) {
    const color = "#1f2937";

    const out = {
        website: <BrandChrome color={color} />,
        facebook: <BrandFacebook color={color} />,
        twitter: <BrandTwitter color={color} />,
        linkedin: <BrandLinkedin color={color} />,
        instagram: <BrandInstagram color={color} />,
        youtube: <BrandYoutube color={color} />,
    };

    return (
        <Link href={link}>
            <a target="_blank" rel="noreferrer">
                {out[name]}
            </a>
        </Link>
    );
}

export default SocialIcon;
