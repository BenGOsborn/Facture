import { NAME, SLOGAN } from "@facture/helpers";
import Link from "next/link";

export function Logo() {
    return (
        <Link href="/">
            <a className="flex flex-col md:items-start items-center">
                <p className="font-bold text-3xl text-white">{NAME}</p>
                <p className="font-bold text-gray-400 text-sm">{SLOGAN}</p>
            </a>
        </Link>
    );
}

export default Logo;
