import { SocialPlatformDisplay } from "@facture/types";
import Link from "next/link";

import { BrandChrome, BrandFacebook, BrandInstagram, BrandLinkedin, BrandTwitter, BrandYoutube } from "tabler-icons-react";

interface Props {
    name: SocialPlatformDisplay;
    link: string;
}

export function SocialIcon({ name, link }: Props) {
    const out: { [key in SocialPlatformDisplay]: JSX.Element } = {
        website: (
            <a role="social-website" target="_blank" rel="noreferrer">
                <BrandChrome />
            </a>
        ),
        facebook: (
            <a role="social-facebook" target="_blank" rel="noreferrer">
                <BrandFacebook />
            </a>
        ),
        twitter: (
            <a role="social-twitter" target="_blank" rel="noreferrer">
                <BrandTwitter />
            </a>
        ),
        linkedin: (
            <a role="social-linkedin" target="_blank" rel="noreferrer">
                <BrandLinkedin />
            </a>
        ),
        instagram: (
            <a role="social-instagram" target="_blank" rel="noreferrer">
                <BrandInstagram />
            </a>
        ),
        youtube: (
            <a role="social-youtube" target="_blank" rel="noreferrer">
                <BrandYoutube />
            </a>
        ),
    };

    return <Link href={link}>{out[name]}</Link>;
}

export default SocialIcon;
