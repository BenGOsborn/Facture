import { emitSocialEvent } from "@facture/helpers";
import { SocialPlatformDisplay } from "@facture/types";
import Link from "next/link";

import { BrandChrome, BrandFacebook, BrandInstagram, BrandLinkedin, BrandTwitter, BrandYoutube } from "tabler-icons-react";

interface Props {
    name: SocialPlatformDisplay;
    link: string;
}

export function SocialIcon({ name, link }: Props) {
    const emit = () => emitSocialEvent(name, link);

    const out: { [key in SocialPlatformDisplay]: JSX.Element } = {
        website: (
            <a onClick={emit} role="social-website" target="_blank" rel="noreferrer">
                <BrandChrome />
            </a>
        ),
        facebook: (
            <a onClick={emit} role="social-facebook" target="_blank" rel="noreferrer">
                <BrandFacebook />
            </a>
        ),
        twitter: (
            <a onClick={emit} role="social-twitter" target="_blank" rel="noreferrer">
                <BrandTwitter />
            </a>
        ),
        linkedin: (
            <a onClick={emit} role="social-linkedin" target="_blank" rel="noreferrer">
                <BrandLinkedin />
            </a>
        ),
        instagram: (
            <a onClick={emit} role="social-instagram" target="_blank" rel="noreferrer">
                <BrandInstagram />
            </a>
        ),
        youtube: (
            <a onClick={emit} role="social-youtube" target="_blank" rel="noreferrer">
                <BrandYoutube />
            </a>
        ),
    };

    return <Link href={link}>{out[name]}</Link>;
}

export default SocialIcon;
