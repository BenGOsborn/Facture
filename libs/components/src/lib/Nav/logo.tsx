import Link from "next/link";

export function Logo() {
    return (
        <Link href="/">
            <a className="flex flex-col items-start">
                <p className="font-bold text-3xl text-white">Facture</p>
                <p className="font-bold text-gray-400 text-sm">Connecting Manufacturers</p>
            </a>
        </Link>
    );
}

export default Logo;
