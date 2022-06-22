import Link from "next/link";

import { BrandChrome, BrandFacebook, BrandInstagram, BrandLinkedin, BrandTwitter, BrandYoutube } from "tabler-icons-react";

interface Props {
    name: string;
    link: string;
}

export function SocialIcon({ name, link }: Props) {
    const out: { [key: string]: JSX.Element } = {
        website: <BrandChrome />,
        facebook: <BrandFacebook />,
        twitter: <BrandTwitter />,
        linkedin: <BrandLinkedin />,
        instagram: <BrandInstagram />,
        youtube: <BrandYoutube />,
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
